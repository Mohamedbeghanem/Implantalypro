"use client"

import { AppointmentHero } from "@/components/appointment-hero"
import { AppointmentForm } from "@/components/appointment-form"
import { AppointmentInfo } from "@/components/appointment-info"

export const dynamic = 'force-dynamic'

export default function AppointmentPage() {
  return (
    <main className="min-h-screen">
      <AppointmentHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>
          <div className="lg:col-span-1">
            <AppointmentInfo />
          </div>
        </div>
      </div>
    </main>
  )
}
