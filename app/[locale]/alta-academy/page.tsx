"use client"

import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { AltaAcademyCourses } from "@/components/alta-academy-courses"
import { AltaAcademyFeatures } from "@/components/alta-academy-features"
import { AltaAcademyTestimonials } from "@/components/alta-academy-testimonials"
import { AltaAcademyStats } from "@/components/alta-academy-stats"

export const dynamic = 'force-dynamic'

export default function AltaAcademyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AltaAcademyHero />
      
      {/* Courses Section */}
      <AltaAcademyCourses />
      
      {/* Features Section */}
      <AltaAcademyFeatures />
      
      {/* Statistics Section */}
      <AltaAcademyStats />
      
      {/* Testimonials Section */}
      <AltaAcademyTestimonials />
    </main>
  )
}
