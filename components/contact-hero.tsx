import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            Get In Touch
          </Badge>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Contact
            <span className="block text-primary">SmileCare Dental</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're here to help with all your dental needs. Contact us today to schedule an appointment or ask any
            questions about our services.
          </p>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email Us</p>
                <p className="text-sm text-muted-foreground">info@smilecare.com</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Visit Us</p>
                <p className="text-sm text-muted-foreground">123 Dental Street</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Office Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Dental Emergency?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              For urgent dental emergencies outside office hours, call our emergency line.
            </p>
            <Link 
              href="tel:+15551234567"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-md"
            >
              Call Emergency Line
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
