"use client"

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import '@/lib/i18n' // Initialize i18n on client side
import { Locale } from '@/lib/translations'

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const { i18n } = useTranslation()
  const params = useParams()
  
  useEffect(() => {
    const locale = params?.locale as Locale
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [params?.locale, i18n])

  return <>{children}</>
}
