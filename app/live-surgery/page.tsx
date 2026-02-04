import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { format, isValid } from "date-fns"

import { ClientLayout } from "@/components/client-layout"
import { LiveSurgeryHero } from "@/components/live-surgery/live-surgery-hero"
import {
  ProcessSteps,
  type ProcessStep,
} from "@/components/live-surgery/process-steps"
import {
  SessionCard,
  type LiveSurgerySessionCard,
} from "@/components/live-surgery/session-card"
import {
  FAQAccordion,
  type FaqItem,
} from "@/components/live-surgery/faq-accordion"
import { Button } from "@/components/ui/button"

export const revalidate = 300

const CMS_BASE_URL = "https://cms.implantaly.com"

type UnknownRecord = Record<string, any>

async function fetchCms<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      next: { revalidate },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

function extractObject(input: unknown): UnknownRecord | null {
  if (!input || typeof input !== "object") return null
  if ("data" in input && typeof (input as UnknownRecord).data === "object") {
    return (input as UnknownRecord).data as UnknownRecord
  }
  return input as UnknownRecord
}

function extractList(input: unknown): UnknownRecord[] {
  if (!input) return []
  if (Array.isArray(input)) return input as UnknownRecord[]
  if (typeof input !== "object") return []
  const record = input as UnknownRecord
  if (Array.isArray(record.data)) return record.data as UnknownRecord[]
  if (Array.isArray(record.items)) return record.items as UnknownRecord[]
  if (Array.isArray(record.results)) return record.results as UnknownRecord[]
  if (Array.isArray(record.sessions)) return record.sessions as UnknownRecord[]
  if (Array.isArray(record.faq)) return record.faq as UnknownRecord[]
  return []
}

function toDate(value: unknown): Date | null {
  if (!value) return null
  if (value instanceof Date) return isValid(value) ? value : null
  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value)
    return isValid(date) ? date : null
  }
  return null
}

function formatDateRange(start?: unknown, end?: unknown) {
  const startDate = toDate(start)
  const endDate = toDate(end)
  if (!startDate) return undefined
  if (endDate) {
    const sameMonth =
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getFullYear() === endDate.getFullYear()
    if (sameMonth) {
      return `${format(startDate, "MMM d")}-${format(endDate, "d, yyyy")}`
    }
    return `${format(startDate, "MMM d, yyyy")} - ${format(
      endDate,
      "MMM d, yyyy"
    )}`
  }
  return format(startDate, "MMM d, yyyy")
}

function normalizeList(value: unknown): string[] {
  if (!value) return []
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item
        if (item && typeof item === "object") {
          return (
            (item as UnknownRecord).name ||
            (item as UnknownRecord).title ||
            (item as UnknownRecord).label
          )
        }
        return null
      })
      .filter(Boolean) as string[]
  }
  if (typeof value === "string") return [value]
  if (typeof value === "object") {
    const record = value as UnknownRecord
    if (record.name || record.title || record.label) {
      return [record.name || record.title || record.label]
    }
  }
  return []
}

function pickFirstList(...lists: string[][]) {
  return lists.find((list) => list.length > 0) || []
}

function normalizeSession(
  session: UnknownRecord,
  index: number
): LiveSurgerySessionCard {
  const startDate =
    session.startDate || session.start_date || session.start || session.dateStart
  const endDate = session.endDate || session.end_date || session.end || session.dateEnd

  const surgeons = pickFirstList(
    normalizeList(session.surgeons),
    normalizeList(session.surgeon),
    normalizeList(session.doctors)
  )

  const highlights = pickFirstList(
    normalizeList(session.highlights),
    normalizeList(session.keyPoints),
    normalizeList(session.topics)
  )

  const startDateValue = toDate(startDate)

  return {
    id:
      String(
        session.id ||
          session._id ||
          session.slug ||
          session.title ||
          session.name ||
          `session-${index}`
      ),
    title: session.title || session.name || "Live Surgery Session",
    dateRange: formatDateRange(startDate, endDate),
    sortDate: startDateValue?.getTime(),
    city:
      session.city ||
      session.locationCity ||
      (typeof session.location === "string"
        ? session.location
        : session.location?.city || session.location?.name),
    clinic:
      session.clinic ||
      session.clinicName ||
      (typeof session.location === "object"
        ? session.location?.clinic
        : undefined) ||
      session.locationClinic,
    surgeons: surgeons.length > 0 ? surgeons : ["Implantaly Surgical Team"],
    level:
      session.level ||
      session.complexity ||
      session.difficulty ||
      "Beginner",
    highlights:
      highlights.length > 0
        ? highlights
        : ["Detailed agenda shared upon confirmation."],
    pricing:
      session.pricingText ||
      session.priceText ||
      session.price ||
      session.cost ||
      "Pricing available on request.",
    ctaLabel:
      session.ctaLabel ||
      session.ctaText ||
      session.cta?.label ||
      (session.ctaType === "contact" ? "Contact" : "Reserve"),
    ctaUrl: session.ctaUrl || session.cta?.url || session.link,
  }
}

function normalizeFaq(item: UnknownRecord, index: number) {
  return {
    id: String(item.id || item._id || item.slug || `faq-${index}`),
    question: item.question || item.title || item.q || "Question",
    answer: item.answer || item.description || item.a || "Answer coming soon.",
    order: item.order ?? item.sort ?? index,
  }
}

function normalizeCta(
  input: unknown,
  fallbackLabel: string,
  fallbackUrl: string
) {
  if (!input) {
    return { label: fallbackLabel, url: fallbackUrl }
  }
  if (typeof input === "string") {
    return { label: input, url: fallbackUrl }
  }
  if (typeof input === "object") {
    const record = input as UnknownRecord
    const label =
      record.label || record.text || record.title || fallbackLabel
    const url = record.url || record.href || record.link || fallbackUrl
    return { label, url }
  }
  return { label: fallbackLabel, url: fallbackUrl }
}

export async function generateMetadata(): Promise<Metadata> {
  const settingsResponse = await fetchCms<unknown>(
    "/api/public/site-settings?site=implantaly"
  )
  const settings = extractObject(settingsResponse) ?? {}
  const seo =
    settings.seo || settings.meta || settings.metadata || {}

  const title =
    seo.title ||
    seo.seoTitle ||
    settings.seoTitle ||
    "Live Surgery | Implantaly"
  const description =
    seo.description ||
    seo.seoDescription ||
    settings.seoDescription ||
    "Live surgery education, guided by Implantaly experts."

  const ogImage =
    seo.ogImage ||
    seo.openGraphImage ||
    settings.ogImage ||
    settings.openGraphImage
  const ogImageUrl =
    typeof ogImage === "string"
      ? ogImage
      : ogImage?.url || ogImage?.src || ogImage?.asset?.url

  return {
    title,
    description,
    alternates: {
      canonical: "https://implantaly.com/live-surgery",
    },
    openGraph: {
      title,
      description,
      url: "https://implantaly.com/live-surgery",
      type: "website",
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
  }
}

export default async function LiveSurgeryPage() {
  const [sessionsResponse, faqResponse] = await Promise.all([
    fetchCms<unknown>("/api/public/live-surgery/sessions?site=implantaly"),
    fetchCms<unknown>("/api/public/live-surgery/faq?site=implantaly"),
  ])

  const hero = {
    title: "Live Surgery",
    subtitle: "Hands-on implant surgery sessions led by experts",
    primaryCta: { label: "Request Your Seat", url: "/contact" },
  }

  const process: UnknownRecord = {}
  const benefits: UnknownRecord[] = []
  const finalCta: UnknownRecord = {}
  const finalPrimaryCta = normalizeCta(
    finalCta.primaryCta || finalCta.primary || finalCta.ctaPrimary,
    "Reserve Your Seat",
    "/contact"
  )
  const finalSecondaryRaw =
    finalCta.secondaryCta || finalCta.secondary || finalCta.ctaSecondary
  const finalSecondaryCta = finalSecondaryRaw
    ? normalizeCta(finalSecondaryRaw, "View Sessions", "#sessions")
    : null

  const sessions = extractList(sessionsResponse)
    .map((session, index) => normalizeSession(session, index))
    .sort((a, b) => {
      return (a.sortDate ?? 0) - (b.sortDate ?? 0)
    })

  const faqItems = extractList(faqResponse)
    .map(normalizeFaq)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((item) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
    })) as FaqItem[]

  const processSteps = (process.steps ||
    process.items ||
    process.list ||
    []) as UnknownRecord[]

  const normalizedProcessSteps: ProcessStep[] =
    processSteps.length > 0
      ? processSteps.map((step) => ({
          title: step.title || step.name || "Step",
          description: step.description || step.details,
        }))
      : [
          {
            title: "Surgical Protocol Briefing",
            description:
              "Structured overview of indications, workflow, and critical surgical considerations.",
          },
          {
            title: "Live Surgical Execution",
            description:
              "Observe real-time procedures with guided explanation and interaction.",
          },
          {
            title: "Clinical Debrief & Takeaways",
            description:
              "Case review with clinical reasoning, outcomes, and practical next steps.",
          },
        ]

  const normalizedBenefits: { title: string; description?: string }[] =
    Array.isArray(benefits) && benefits.length > 0
      ? benefits.map((item: UnknownRecord) => ({
          title: item.title || item.heading || item.name || "Benefit",
          description: item.description || item.text,
        }))
      : [
          {
            title: "Precision You Can See",
            description:
              "Front-row access to advanced implantology workflows led by experts.",
          },
          {
            title: "Learning in Real Time",
            description:
              "Follow decision-making and technique changes as the surgery unfolds.",
          },
          {
            title: "Direct Access to Surgeons",
            description:
              "Ask questions, review protocols, and refine your clinical approach.",
          },
        ]

  return (
    <ClientLayout>
      <div className="bg-gradient-to-b from-background via-background to-primary/5">
        <LiveSurgeryHero
          badge="Implantaly Live Surgery"
          title={hero.title}
          subtitle={hero.subtitle}
          primaryCta={hero.primaryCta}
          secondaryCta={{ label: "View Sessions", url: "#sessions" }}
        />

        <ProcessSteps
          title={process.title || "Our Process"}
          description={
            process.description ||
            "Each Live Surgery session is structured for clarity, interaction, and immediate clinical value."
          }
          ctaLabel={process.ctaLabel || process.cta?.label || "Get in touch"}
          ctaUrl={process.ctaUrl || process.cta?.url || "/contact"}
          steps={normalizedProcessSteps}
        />

        <section id="sessions" className="py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Upcoming Sessions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Live Surgery Sessions
              </h2>
            </div>
            {sessions.length > 0 ? (
              <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {sessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
                New Live Surgery sessions will be announced soon.
              </div>
            )}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Why Implantaly Live Surgery
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {normalizedBenefits.map((benefit, index) => (
                <div
                  key={`${benefit.title}-${index}`}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion
          heading="Frequently Asked Questions"
          items={
            faqItems.length > 0
              ? faqItems
              : [
                  {
                    id: "faq-1",
                    question: "Where do live sessions take place?",
                    answer:
                      "In modern Implantaly clinics equipped with advanced surgical technology.",
                  },
                ]
          }
        />

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-background to-secondary/20 p-10 text-center md:p-14">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {finalCta.title ||
                  "Ready to experience Implantaly Live Surgery?"}
              </h2>
              {finalCta.description && (
                <p className="mt-4 text-base text-muted-foreground">
                  {finalCta.description}
                </p>
              )}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={finalPrimaryCta.url}>{finalPrimaryCta.label}</a>
                </Button>
                {finalSecondaryCta && (
                  <Button asChild variant="outline" size="lg">
                    <a href={finalSecondaryCta.url}>
                      {finalSecondaryCta.label}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  )
}
