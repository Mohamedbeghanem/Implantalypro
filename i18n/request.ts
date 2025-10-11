import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'fr', 'it']

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale Promise to get the actual string
  const locale = await requestLocale
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
