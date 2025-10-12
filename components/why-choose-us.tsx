"use client"

import { useTranslations } from '@/hooks/use-translations'
import { Shield, Clock, Award, Heart, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const reasons = [
  {
    icon: Shield,
    titleKey: "whyChooseUs.expertise",
    description: "State-of-the-art equipment and latest dental technology for precise, comfortable treatments.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    titleKey: "whyChooseUs.technology",
    description: "Emergency care and urgent appointments available when you need them most.",
    color: "text-green-600"
  },
  {
    icon: Award,
    titleKey: "whyChooseUs.care",
    description: "Experienced dentists and specialists with advanced training and certifications.",
    color: "text-purple-600"
  },
  {
    icon: Heart,
    titleKey: "whyChooseUs.experience",
    description: "Gentle, patient-focused approach that puts your comfort and well-being first.",
    color: "text-red-600"
  },
  {
    icon: Users,
    titleKey: "whyChooseUs.support",
    description: "Welcoming environment for patients of all ages, from children to seniors.",
    color: "text-orange-600"
  },
  {
    icon: Zap,
    titleKey: "whyChooseUs.modernFacility",
    description: "Clean, comfortable, and modern dental office designed for your relaxation.",
    color: "text-indigo-600"
  }
]

export function WhyChooseUs() {
  const { t } = useTranslations()

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${reason.color.split('-')[1]}-100 to-${reason.color.split('-')[1]}-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="text-3xl font-bold text-primary mb-2">15+</div>
               <div className="text-muted-foreground">{t('whyChooseUs.yearsExperience')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-primary mb-2">5000+</div>
               <div className="text-muted-foreground">{t('whyChooseUs.happyPatients')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-primary mb-2">99%</div>
               <div className="text-muted-foreground">{t('whyChooseUs.patientSatisfaction')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-primary mb-2">24/7</div>
               <div className="text-muted-foreground">{t('whyChooseUs.emergencyCare')}</div>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Experience the difference that modern dentistry and compassionate care can make for your smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Schedule Your Visit
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
