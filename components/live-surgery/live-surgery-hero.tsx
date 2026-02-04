import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface HeroCta {
  label: string
  url: string
}

interface LiveSurgeryHeroProps {
  badge?: string
  title: string
  subtitle?: string
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
  image?: {
    url?: string
    alt?: string
  }
}

export function LiveSurgeryHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
}: LiveSurgeryHeroProps) {
  if (!title && !subtitle) return null

  const showImage = Boolean(image?.url)

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
      <div className="container relative max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="bg-background/80">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              {primaryCta && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={primaryCta.url}>{primaryCta.label}</a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href={secondaryCta.url} className="flex items-center gap-2">
                    {secondaryCta.label}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          {showImage ? (
            <div className="relative">
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-8 right-6 h-32 w-32 rounded-full bg-secondary/30 blur-3xl" />
              <img
                src={image?.url}
                alt={image?.alt || "Live surgery session"}
                className="h-[320px] w-full rounded-3xl object-cover shadow-2xl sm:h-[380px] lg:h-[420px]"
              />
            </div>
          ) : (
            <div className="relative flex items-center justify-center rounded-3xl border border-border/70 bg-card/70 p-10 text-center shadow-sm">
              <div className="absolute -top-10 right-10 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-secondary/30 blur-3xl" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Live Surgery
                </p>
                <p className="mt-4 text-2xl font-semibold text-foreground">
                  Immersive surgical education in real time.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
