import { CornerDownRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export interface ProcessStep {
  title: string
  description?: string
}

interface ProcessStepsProps {
  title: string
  description?: string
  ctaLabel?: string
  ctaUrl?: string
  steps: ProcessStep[]
}

export function ProcessSteps({
  title,
  description,
  ctaLabel,
  ctaUrl,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="container max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[2fr_4fr] lg:gap-20">
          <div className="h-fit space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-xl text-base text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
            {ctaLabel && ctaUrl && (
              <Button variant="ghost" className="gap-2 px-0" asChild>
                <a href={ctaUrl}>
                  <CornerDownRight className="size-4 text-primary" />
                  {ctaLabel}
                </a>
              </Button>
            )}
          </div>
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li
                key={`${step.title}-${index}`}
                className="relative flex flex-col gap-4 border-t border-border py-8 md:flex-row md:items-start md:gap-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      {step.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
