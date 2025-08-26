import { AltaAcademyHero } from "@/components/alta-academy-hero"
import { AltaAcademyCourses } from "@/components/alta-academy-courses"
import { AltaAcademyFeatures } from "@/components/alta-academy-features"
import { AltaAcademyTestimonials } from "@/components/alta-academy-testimonials"
import { AltaAcademyStats } from "@/components/alta-academy-stats"

interface AltaAcademyPageProps {
  params: Promise<{ locale: string }>
}

export default async function AltaAcademyPage({ params }: AltaAcademyPageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AltaAcademyHero />
      
      {/* Courses Section */}
      <AltaAcademyCourses />
      
      {/* Features Section */}
      <AltaAcademyFeatures locale={locale} />
      
      {/* Statistics Section */}
      <AltaAcademyStats locale={locale} />
      
      {/* Testimonials Section */}
      <AltaAcademyTestimonials locale={locale} />
    </main>
  )
}
