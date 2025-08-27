"use client"

import { Badge } from "@/components/ui/badge"
import { useTranslations } from 'next-intl'
import { BookOpen } from 'lucide-react'

export function BlogHero() {
  const t = useTranslations('blog')

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center fade-in-down">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto fade-in-up delay-200">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search')}
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
