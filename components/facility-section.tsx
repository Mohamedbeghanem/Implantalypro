import { Card } from "@/components/ui/card"
import { Monitor, Wifi, Coffee, Car, Shield, Zap } from "lucide-react"

export function FacilitySection() {
  const features = [
    {
      icon: Monitor,
      title: "Digital X-Rays",
      description: "Latest digital imaging technology for accurate diagnosis with reduced radiation exposure.",
    },
    {
      icon: Zap,
      title: "Laser Dentistry",
      description: "Advanced laser technology for precise, comfortable, and minimally invasive treatments.",
    },
    {
      icon: Shield,
      title: "Sterilization Center",
      description: "State-of-the-art sterilization equipment ensuring the highest safety standards.",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Complimentary high-speed internet access throughout our comfortable waiting areas.",
    },
    {
      icon: Coffee,
      title: "Refreshment Bar",
      description: "Complimentary beverages and snacks to make your visit more comfortable.",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Convenient on-site parking available for all patients and visitors.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
                Modern Facility & Technology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art facility is designed with your comfort and safety in mind. We've invested in the
                latest dental technology and created a welcoming environment that helps you feel at ease during your
                visit.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/image00002.jpeg"
                alt="Modern dental facility interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-card shadow-lg">
              <div className="text-center">
                <div className="font-heading font-bold text-xl text-foreground">ADA</div>
                <div className="text-xs text-muted-foreground">Certified Facility</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
