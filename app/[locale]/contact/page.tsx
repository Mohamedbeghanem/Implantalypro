import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <ContactInfo />
            <LocationMap />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
