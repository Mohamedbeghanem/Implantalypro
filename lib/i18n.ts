import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'

// Convert the translations object to i18next format
const resources = {
  en: {
    common: translations.en,
  },
  fr: {
    common: translations.fr,
  },
  it: {
    common: translations.it,
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
    
    defaultNS: 'common',
    ns: ['common'],
  })

export default i18n
