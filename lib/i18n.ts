import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'

// Convert the translations object to i18next format
const resources = {
  en: {
    translation: translations.en,
  },
  fr: {
    translation: translations.fr,
  },
  it: {
    translation: translations.it,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false, // Disabled debug mode
    
    interpolation: {
      escapeValue: false,
    },
    
    defaultNS: 'translation',
    ns: ['translation'],
  })

export default i18n
