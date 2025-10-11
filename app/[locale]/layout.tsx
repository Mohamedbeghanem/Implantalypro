import type React from "react"
import { setRequestLocale } from 'next-intl/server'
import { ClientProviders } from "@/components/client-providers"
import { ClientLayout } from "@/components/client-layout"

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // Enable static rendering
  setRequestLocale(params.locale)

  return (
    <ClientProviders>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ClientProviders>
  )
}
