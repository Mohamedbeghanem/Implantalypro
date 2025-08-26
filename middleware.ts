import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'fr', 'it']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  // Get pathname from request (e.g. /blog)
  const pathname = request.nextUrl.pathname

  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
