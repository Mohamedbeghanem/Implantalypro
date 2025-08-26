import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'

export function ServicesHero() {
  const t = useTranslations('services')
  const locale = useLocale()
  const benefits = [
    t('benefits.latestTechnology'),
    t('benefits.experiencedProfessionals'),
    t('benefits.comfortableEnvironment'),
    t('benefits.flexiblePayment'),
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                {t('subtitle')}
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={`/${locale}/appointment`}>{t('actions.scheduleConsultation')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/contact`}>{t('actions.askQuestions')}</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/dental-treatment-room.png"
                alt="Modern dental treatment room"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
