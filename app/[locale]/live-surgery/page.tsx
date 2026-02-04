import type { Metadata } from "next"
import { format, isValid } from "date-fns"

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
import {
  getLiveSurgeryFaq,
  getLiveSurgerySessions,
  getLiveSurgerySiteSettings,
} from "@/lib/liveSurgery"

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

export async function generateMetadata(): Promise<Metadata> {
  const settings = getLiveSurgerySiteSettings()
  const title =
    settings.seoTitle || "Live Surgery | Implantaly"
  const description =
    settings.seoDescription ||
    "Live surgery education, guided by Implantaly experts."

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
    },
  }
}

interface LiveSurgeryPageProps {
  params: Promise<{ locale: string }>
}

export default async function LiveSurgeryPage({
  params,
}: LiveSurgeryPageProps) {
  const { locale } = await params

  const settings = getLiveSurgerySiteSettings()
  const sessions = getLiveSurgerySessions()
  const faqItems = getLiveSurgeryFaq()

  const hero = {
    title: "Live Surgery",
    subtitle: "Hands-on implant surgery sessions led by experts",
    primaryCta: {
      label: "Request Your Seat",
      url: `/${locale}/contact`,
    },
  }

  const shouldRenderHero =
    Boolean(hero.title?.trim()) || Boolean(hero.subtitle?.trim())

  const whatsappUrl = settings.whatsapp
    ? settings.whatsapp.startsWith("http")
      ? settings.whatsapp
      : settings.whatsapp.includes("wa.me")
        ? `https://${settings.whatsapp}`
        : `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`
    : ""

  const sessionCards: LiveSurgerySessionCard[] = sessions.map((session) => ({
    id: session.id,
    title: session.title,
    dateRange: formatDateRange(session.startDate, session.endDate),
    city: session.city,
    clinic: session.clinicName,
    imageUrl: session.coverImageUrl,
    imageAlt: `${session.title} session`,
    surgeons:
      session.surgeons.length > 0
        ? session.surgeons
        : ["Implantaly Surgical Team"],
    level: session.level,
    highlights:
      session.highlights.length > 0
        ? session.highlights
        : ["Detailed agenda shared upon confirmation."],
    pricing: session.pricingText || "Pricing available on request.",
    primaryCtaLabel: "Register",
    primaryCtaUrl: `/${locale}/inscription`,
    secondaryCtaLabel: "Request Your Seat",
    secondaryCtaUrl: session.ctaUrl || `/${locale}/contact`,
  }))

  const faqContent = faqItems.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  })) as FaqItem[]

  const processSteps: ProcessStep[] = [
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

  return (
    <div className="bg-gradient-to-b from-background via-background to-primary/5">
      {shouldRenderHero && (
        <LiveSurgeryHero
          badge="Implantaly Live Surgery"
          title={hero.title}
          subtitle={hero.subtitle}
          primaryCta={hero.primaryCta}
          secondaryCta={{ label: "View Sessions", url: "#sessions" }}
        />
      )}

      <ProcessSteps
        title="Our Process"
        description={
          "Each Live Surgery session is structured for clarity, interaction, and immediate clinical value."
        }
        ctaLabel="Get in touch"
        ctaUrl={`/${locale}/contact`}
        steps={processSteps}
      />

      <section id="sessions" className="py-16 md:py-24 lg:py-28">
        <div className="container max-w-6xl">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Upcoming Sessions
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Live Surgery Sessions
            </h2>
          </div>
          {sessions.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {sessionCards.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-border/70 bg-card p-12 text-center md:p-14">
              <p className="text-base font-semibold text-foreground">
                No sessions yet.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact us to reserve a seat or request next dates.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                {whatsappUrl && (
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
                <a
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                  href={`/${locale}/contact`}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {faqContent.length > 0 && (
        <FAQAccordion heading="Frequently Asked Questions" items={faqContent} />
      )}
    </div>
  )
}
