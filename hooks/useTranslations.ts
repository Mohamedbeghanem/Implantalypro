import { useParams } from 'next/navigation'
import { translations } from '@/lib/translations'

export function useTranslations() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return the key if translation not found
          }
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }
  
  return {
    t,
    locale,
    translations: translations[locale as keyof typeof translations] || translations.en
  }
}
