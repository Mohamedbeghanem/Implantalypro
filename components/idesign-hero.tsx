"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Box, Eye, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { useTranslations } from '@/hooks/use-translations'
import { useMemo } from 'react'

export function IDesignHero() {
  const { t, currentLanguage: locale } = useTranslations()
  
  const features = useMemo(() => [
    {
      icon: Box,
      title: "3D Modeling",
      description: "Advanced digital design and visualization",
    },
    {
      icon: Eye,
      title: "Virtual Reality",
      description: "Immersive treatment planning experience",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Personalized implant and restoration concepts",
    },
    {
      icon: Zap,
      title: "Real-time Preview",
      description: "Instant visualization of treatment outcomes",
    },
  ], [])

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-8 left-40 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
              <Box className="w-4 h-4 mr-2" />
              IDesign - 3D Dental Design Division
            </div>
            <h1 className="font-heading font-bold text-5xl lg:text-7xl text-foreground leading-tight gradient-text fade-in">
              {t('idesign.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto slide-up">
              {t('idesign.subtitle')}
            </p>
            
                         {/* Enhanced CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-up" style={{ animationDelay: '0.3s' }}>
               <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-sky-700 hover:from-blue-700 hover:to-sky-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
                 <Link href={`/${locale}/idesign/portfolio`}>{t('idesign.cta')}</Link>
               </Button>
               <Button variant="outline" size="lg" asChild className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg">
                 <Link href={`/${locale}/idesign/contact`}>{t('idesign.learnMore')}</Link>
               </Button>
             </div>

                         {/* Enhanced Status Indicators */}
             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-sm text-muted-foreground slide-up" style={{ animationDelay: '0.6s' }}>
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-blue-500 rounded-full pulse-glow"></div>
                 <span className="font-medium">{t('idesign.status.3dVisualization')}</span>
               </div>
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-sky-500 rounded-full pulse-glow" style={{ animationDelay: '1s' }}></div>
                 <span className="font-medium">{t('idesign.status.vrExperience')}</span>
               </div>
             </div>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-2xl">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted hover-rotate-3d shadow-2xl">
              <img
                src="/placeholder-kk841.png"
                alt="3D dental design and visualization"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Enhanced Floating Stats Card */}
            <div className="scale-in" style={{ animationDelay: '1s' }}>
              <Card className="absolute -bottom-8 -left-8 p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-0 border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="font-heading font-bold text-3xl text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground font-medium">{t('idesign.stats.designsCreated')}</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-3xl text-foreground">99%</div>
                    <div className="text-sm text-muted-foreground font-medium">{t('idesign.stats.accuracyRate')}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                                 <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
                   <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                     <feature.icon className="w-10 h-10" />
                   </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
