import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Mail, CreditCard, Shield } from "lucide-react"

export function AppointmentInfo() {
  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  const policies = [
    {
      icon: Clock,
      title: "Cancellation Policy",
      description: "Please provide 24-hour notice for cancellations to avoid fees.",
    },
    {
      icon: CreditCard,
      title: "Payment Options",
      description: "We accept cash, credit cards, and most insurance plans.",
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "We follow strict sterilization and safety guidelines for your protection.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Main Office</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">info@smilecare.com</p>
              <p className="text-sm text-muted-foreground">Email Us</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">123 Dental Street</p>
              <p className="text-sm text-muted-foreground">Suite 100, City, ST 12345</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Office Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">Office Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {officeHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium">{schedule.day}</span>
              <Badge variant="secondary" className="text-xs">
                {schedule.hours}
              </Badge>
            </div>
          ))}
          <div className="pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground">Emergency appointments available outside regular hours</p>
          </div>
        </CardContent>
      </Card>

      {/* Important Information */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">Important Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-start space-x-3">
              <policy.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-sm">{policy.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{policy.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What to Bring */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">What to Bring</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Valid photo ID</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Insurance cards</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>List of current medications</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Previous dental records (if available)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
