"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Shield, Zap, Heart } from "lucide-react"
import Link from "next/link"
import { useTranslations } from '@/hooks/use-translations'

export function ServicesOverview() {
  const { t, currentLanguage } = useTranslations()
  
  const services = [
    {
      icon: Smile,
      title: t('services.implantSurgery'),
      description: t('services.implantSurgeryDesc'),
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Exams", "Fluoride Treatments"],
    },
    {
      icon: Shield,
      title: t('services.boneGrafting'),
      description: t('services.boneGraftingDesc'),
      features: ["Dental Sealants", "Night Guards", "Periodontal Care", "Oral Cancer Screening"],
    },
    {
      icon: Zap,
      title: t('services.fullArchReplacement'),
      description: t('services.fullArchReplacementDesc'),
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
    },
    {
      icon: Heart,
      title: t('services.emergencyCare'),
      description: t('services.emergencyCareDesc'),
      features: ["Dental Implants", "Crowns & Bridges", "Root Canal Therapy", "Dentures"],
    },
  ]

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20 slide-up">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Smile className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground gradient-text max-w-3xl mx-auto leading-tight">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:scale-110">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="font-heading text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground fade-in-left group-hover:text-foreground transition-colors duration-300"
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0 pulse-glow" style={{ animationDelay: `${featureIndex * 0.2}s` }}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
              <Link href={`/${currentLanguage}/services`}>Schedule Consultation</Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Latest Technology</span> • <span className="font-medium">Experienced Professionals</span> • <span className="font-medium">Comfortable Environment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
