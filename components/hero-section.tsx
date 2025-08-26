"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Clock, Award, Users } from "lucide-react"
import Link from "next/link"
import { useTranslations } from '@/hooks/use-translations'
import { useMemo } from 'react'

export function HeroSection() {
  const { t, currentLanguage } = useTranslations()
  
  const features = useMemo(() => [
    {
      icon: Shield,
      title: t('hero.features.experience'),
      description: "State-of-the-art implant protocols",
    },
    {
      icon: Clock,
      title: t('hero.features.technology'),
      description: "Advanced implant technology & techniques",
    },
    {
      icon: Award,
      title: t('hero.features.care'),
      description: "20+ years of implant excellence",
    },
    {
      icon: Users,
      title: t('hero.features.team'),
      description: "Specialized implant care for all ages",
    },
  ], [t])

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_60%)]"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-8 left-40 w-40 h-40 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content with improved centering */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl lg:text-7xl text-foreground leading-tight gradient-text fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto slide-up">
              {t('hero.subtitle')}
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" asChild className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
                <Link href={`/${currentLanguage}/appointment`}>{t('hero.cta')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
                <Link href={`/${currentLanguage}/services`}>{t('hero.learnMore')}</Link>
              </Button>
            </div>

            {/* Enhanced Status Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-sm text-muted-foreground slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                <span className="font-medium">{t('hero.features.sameDayAppointments')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow" style={{ animationDelay: '1s' }}></div>
                <span className="font-medium">{t('hero.features.insuranceAccepted')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-2xl">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted hover-rotate-3d shadow-2xl">
              <img
                src="/modern-dental-office.png"
                alt="Modern dental office interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Enhanced Floating Stats Card */}
            <div className="scale-in" style={{ animationDelay: '1s' }}>
              <Card className="absolute -bottom-8 -left-8 p-8 glass shadow-2xl border-0">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="font-heading font-bold text-3xl text-foreground">10000+</div>
                    <div className="text-sm text-muted-foreground font-medium">Successful Implants</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-3xl text-foreground">20+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in-up group"
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 glass">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
