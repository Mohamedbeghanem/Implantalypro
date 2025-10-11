'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const params = useParams()
  const locale = params?.locale as string || 'en'

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Something went wrong!</h1>
          <p className="text-muted-foreground max-w-md">
            We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button onClick={() => window.location.href = `/${locale}`} variant="outline">
            Go home
          </Button>
        </div>
      </div>
    </div>
  )
}
