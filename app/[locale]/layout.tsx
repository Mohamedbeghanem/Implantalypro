import type React from "react"
import { ClientProviders } from "@/components/client-providers"
import { ClientLayout } from "@/components/client-layout"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'it' }
  ]
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <ClientProviders>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ClientProviders>
  )
}
