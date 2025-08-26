import { ServicesHero } from "@/components/services-hero"
import { ServiceCategories } from "@/components/service-categories"
import { TreatmentDetails } from "@/components/treatment-details"
import { ServicesFAQ } from "@/components/services-faq"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServiceCategories />
      <TreatmentDetails />
      <ServicesFAQ />
    </main>
  )
}
