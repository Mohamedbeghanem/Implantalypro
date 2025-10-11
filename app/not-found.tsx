"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">404 - Page Not Found</h1>
          <p className="text-muted-foreground max-w-md">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/en"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-md"
          >
            Go home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-md"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
