import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Car, Bus, Accessibility } from "lucide-react"

export function ContactInfo() {
  const locations = [
    {
      name: "Main Office",
      address: "123 Dental Street, Suite 100",
      city: "Downtown City, ST 12345",
      phone: "(555) 123-4567",
      email: "main@smilecare.com",
      hours: [
        { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 3:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      features: ["Free Parking", "Wheelchair Accessible", "Public Transit"],
    },
    {
      name: "Westside Branch",
      address: "456 Oak Avenue, Suite 200",
      city: "Westside City, ST 12346",
      phone: "(555) 123-4568",
      email: "westside@smilecare.com",
      hours: [
        { day: "Monday - Thursday", time: "9:00 AM - 7:00 PM" },
        { day: "Friday", time: "8:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      features: ["Valet Parking", "Wheelchair Accessible", "Drive-through Pharmacy"],
    },
  ]

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Parking")) return Car
    if (feature.includes("Transit")) return Bus
    if (feature.includes("Accessible")) return Accessibility
    return MapPin
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Locations</h2>
        <p className="text-muted-foreground leading-relaxed">
          We have multiple convenient locations to serve you better. Each office is fully equipped with modern dental
          technology.
        </p>
      </div>

      <div className="space-y-6">
        {locations.map((location, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-heading text-xl">{location.name}</CardTitle>
                {index === 0 && <Badge className="bg-primary text-primary-foreground">Main</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Address & Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{location.address}</p>
                      <p className="text-sm text-muted-foreground">{location.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="font-medium text-foreground">{location.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="font-medium text-foreground">{location.email}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Office Hours</h4>
                  </div>
                  <div className="space-y-2">
                    {location.hours.map((schedule, scheduleIndex) => (
                      <div key={scheduleIndex} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Amenities</h4>
                <div className="flex flex-wrap gap-3">
                  {location.features.map((feature, featureIndex) => {
                    const IconComponent = getFeatureIcon(feature)
                    return (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
