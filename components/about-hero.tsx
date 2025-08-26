import { Card } from "@/components/ui/card"
import { Award, Users, Clock, MapPin } from "lucide-react"
import { useTranslations } from 'next-intl'

export function AboutHero() {
  const t = useTranslations('about')
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: t('stats.happyPatients'),
    },
    {
      icon: Clock,
      number: "20+",
      label: t('stats.yearsExperience'),
    },
    {
      icon: Award,
      number: "15+",
      label: t('stats.awardsWon'),
    },
    {
      icon: MapPin,
      number: "3",
      label: t('stats.locations'),
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('subtitle')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/placeholder-0rbi0.png"
                alt="SmileCare dental team"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading font-bold text-3xl text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
