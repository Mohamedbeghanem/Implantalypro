"use client"

import { useTranslations } from '@/hooks/use-translations'
import { Users, Award, Clock, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    icon: Users,
    number: "5000+",
    labelKey: "statistics.patientsServed",
    description: "Trusted by thousands of families"
  },
  {
    icon: Award,
    number: "15+",
    labelKey: "statistics.yearsExperience",
    description: "Decades of dental excellence"
  },
  {
    icon: Clock,
    number: "24/7",
    labelKey: "statistics.emergencyCare",
    description: "Always here when you need us"
  },
  {
    icon: Heart,
    number: "100%",
    labelKey: "statistics.satisfactionRate",
    description: "Committed to your comfort"
  }
]

export function StatisticsSection() {
  const { t } = useTranslations()

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('statistics.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('statistics.subtitle')}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 text-center hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {t(stat.labelKey)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Advanced Technology</div>
              <div className="text-muted-foreground">State-of-the-art equipment for precise treatments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Expert Team</div>
              <div className="text-muted-foreground">Certified professionals with advanced training</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Modern Facility</div>
              <div className="text-muted-foreground">Comfortable, clean, and welcoming environment</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
