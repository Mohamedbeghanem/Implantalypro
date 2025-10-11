import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Implantaly Group - Leading Dental Implant Specialists",
  description:
    "Leading dental implant specialists with state-of-the-art technology and compassionate care. Your smile transformation is our expertise.",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: Promise<{ locale?: string }>
}) {
  let locale = 'en'
  
  if (params) {
    const resolvedParams = await params
    locale = resolvedParams?.locale || 'en'
  }

  return (
    <html lang={locale} className={`${workSans.variable} ${openSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="font-body antialiased bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
