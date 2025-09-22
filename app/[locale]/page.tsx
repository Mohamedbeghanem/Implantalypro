import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatisticsSection } from "@/components/statistics-section"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { ResponsiveHeroLogos } from "@/components/responsive-hero-logos"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  // Await the params Promise
  await params

  return (
    <main className="min-h-screen">
      {/* Responsive hero with dashed-circle logos under the header */}
      <ResponsiveHeroLogos />

      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesOverview />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Latest Blog Posts */}
      <LatestBlogPosts />
    </main>
  )
}
