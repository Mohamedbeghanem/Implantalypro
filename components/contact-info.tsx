import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Car, Bus, Accessibility, Facebook, Instagram, Linkedin } from "lucide-react"

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export function ContactInfo() {
  const locations = [
    {
      name: "Main Office",
      address: "25 Rue said greffon,hassan badi Alger",
      city: "",
      phone: "+213 28 461 584",
      email: "contact@implantaly.com",
      hours: [
        { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 3:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      features: ["Free Parking", "Wheelchair Accessible", "Public Transit"],
      socials: [
         { icon: Facebook, href: "https://www.facebook.com/implantaly", label: "Facebook" },
            { icon: Instagram, href: "https://www.instagram.com/implantaly_dental_clinic_by_hs", label: "Instagram" },
            { icon: TikTokIcon, href: "https://www.tiktok.com/@implantaly.dental.clinic", label: "TikTok" },
            { icon: Linkedin, href: "https://www.linkedin.com/company/implantaly-dental-clinic-by-hs/", label: "LinkedIn" },
          ],
    },
    {
      name: "Westside Branch",
      address: "",
      city: "",
      phone: "+213 560345253",
      email: "ceo@implantaly.com",
      hours: [
        { day: "Monday - Thursday", time: "9:00 AM - 7:00 PM" },
        { day: "Friday", time: "8:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      features: ["Valet Parking", "Wheelchair Accessible", "Drive-through Pharmacy"],
      socials: [
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: TikTokIcon, href: "#" },
      ],
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
                      <div key={scheduleIndex} className="flex justify-between text-.tsx
- [ts Error] Line 20: Declaration or statement expected.sm">
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

              {/* Socials */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {location.socials?.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-300 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
