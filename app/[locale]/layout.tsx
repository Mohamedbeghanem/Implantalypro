import type React from "react"
import { setRequestLocale } from 'next-intl/server'
import { ClientProviders } from "@/components/client-providers"
import { ClientLayout } from "@/components/client-layout"

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  // Enable static rendering
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <ClientProviders>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ClientProviders>
  )
}
