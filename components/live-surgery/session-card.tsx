import { Calendar, MapPin, Stethoscope, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface LiveSurgerySessionCard {
  id: string
  title: string
  dateRange?: string
  sortDate?: number
  city?: string
  clinic?: string
  surgeons: string[]
  level: string
  highlights: string[]
  pricing?: string
  imageUrl?: string
  imageAlt?: string
  primaryCtaLabel: string
  primaryCtaUrl?: string
  secondaryCtaLabel?: string
  secondaryCtaUrl?: string
}

const levelStyles: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-800",
  intermediate: "bg-sky-100 text-sky-800",
  advanced: "bg-violet-100 text-violet-800",
}

export function SessionCard({ session }: { session: LiveSurgerySessionCard }) {
  const levelKey = session.level.toLowerCase()
  const levelClass = levelStyles[levelKey] ?? "bg-primary/10 text-primary"
  const locationText = [session.city, session.clinic].filter(Boolean).join(" / ")

  const isExternal =
    typeof session.primaryCtaUrl === "string" &&
    session.primaryCtaUrl.startsWith("http")
  const secondaryIsExternal =
    typeof session.secondaryCtaUrl === "string" &&
    session.secondaryCtaUrl.startsWith("http")

  return (
    <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card/90 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
      {session.imageUrl && (
        <div className="mb-5 overflow-hidden rounded-2xl border border-border/60">
          <img
            src={session.imageUrl}
            alt={session.imageAlt || session.title}
            className="h-44 w-full object-cover md:h-48"
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-3">
        <Badge className={cn("capitalize", levelClass)}>{session.level}</Badge>
        {session.dateRange && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="size-4 text-primary" />
            <span>{session.dateRange}</span>
          </div>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
        {session.title}
      </h3>

      {locationText && (
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          <span>{locationText}</span>
        </div>
      )}

      <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
        <Users className="mt-0.5 size-4 text-primary" />
        <span>{session.surgeons.join(", ")}</span>
      </div>

      {session.highlights.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          {session.highlights.map((highlight, index) => (
            <li key={`${session.id}-highlight-${index}`} className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Stethoscope className="size-4 text-primary" />
          <span>{session.pricing}</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Button asChild className="w-full" size="lg">
            <a
              href={session.primaryCtaUrl || "#register"}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {session.primaryCtaLabel}
            </a>
          </Button>
          {session.secondaryCtaLabel && session.secondaryCtaUrl && (
            <Button asChild className="w-full" size="lg" variant="outline">
              <a
                href={session.secondaryCtaUrl}
                target={secondaryIsExternal ? "_blank" : undefined}
                rel={secondaryIsExternal ? "noreferrer" : undefined}
              >
                {session.secondaryCtaLabel}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
