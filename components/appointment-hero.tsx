import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Phone } from "lucide-react"

export function AppointmentHero() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Book Your Visit
          </Badge>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Schedule Your
            <span className="block text-primary">Appointment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book your dental appointment online or call us directly. We offer flexible scheduling to accommodate your
            busy lifestyle.
          </p>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Same-day appointments available</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm">Evening & weekend hours</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">Call: (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
