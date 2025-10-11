"use client"

import { useTranslation } from 'react-i18next'
import { translations, Locale } from '@/lib/translations'

export function useTranslations() {
  const { t, i18n } = useTranslation()
  
  const getTranslation = (key: string, locale?: Locale) => {
    if (locale) {
      // Get translation for specific locale
      const keys = key.split('.')
      let value: any = translations[locale]
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return '' // Return empty string if translation not found
        }
      }
      
      return typeof value === 'string' ? value : ''
    }
    
    // Use i18next translation
    return t(key)
  }
  
  const changeLanguage = (locale: Locale) => {
    i18n.changeLanguage(locale)
  }
  
  const currentLanguage = i18n.language as Locale
  
  return {
    t: getTranslation,
    changeLanguage,
    currentLanguage,
    i18n
  }
}
