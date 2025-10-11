"use client"

import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ExampleTranslationComponent() {
  // Use the useTranslations hook to get translations for specific namespaces
  const t = useTranslations('common')
  const heroT = useTranslations('hero')
  const aboutT = useTranslations('about')
  
  // Use the useLocale hook to get the current locale
  const locale = useLocale()

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Example Translation Component</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic translation usage */}
          <div>
            <h3 className="font-semibold mb-2">Basic Translations:</h3>
            <p><strong>Loading:</strong> {t('loading')}</p>
            <p><strong>Error:</strong> {t('error')}</p>
            <p><strong>Success:</strong> {t('success')}</p>
          </div>

          {/* Hero section translations */}
          <div>
            <h3 className="font-semibold mb-2">Hero Section:</h3>
            <p><strong>Title:</strong> {heroT('title')}</p>
            <p><strong>Subtitle:</strong> {heroT('subtitle')}</p>
            <p><strong>CTA:</strong> {heroT('cta')}</p>
          </div>

          {/* About section translations */}
          <div>
            <h3 className="font-semibold mb-2">About Section:</h3>
            <p><strong>Title:</strong> {aboutT('title')}</p>
            <p><strong>Subtitle:</strong> {aboutT('subtitle')}</p>
          </div>

          {/* Current locale display */}
          <div>
            <h3 className="font-semibold mb-2">Current Locale:</h3>
            <p><strong>Locale:</strong> {locale}</p>
            <p><strong>Date Format:</strong> {new Date().toLocaleDateString(locale)}</p>
          </div>

          {/* Buttons with translations */}
          <div className="flex gap-4">
            <Button>{t('save')}</Button>
            <Button variant="outline">{t('cancel')}</Button>
            <Button variant="secondary">{t('close')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
