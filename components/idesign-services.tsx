import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Eye, Palette, Zap, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"
import { useLocale } from 'next-intl'

export function IDesignServices() {
  const locale = useLocale()
  
  const services = [
    {
      title: "3D Implant Planning",
      description: "Advanced digital planning for precise implant placement and optimal results",
      icon: Box,
      features: ["CBCT Analysis", "Virtual Implant Placement", "Surgical Guide Design"],
      image: "/placeholder-0rbi0.png"
    },
    {
      title: "Virtual Smile Design",
      description: "See your new smile before treatment with realistic 3D visualization",
      icon: Eye,
      features: ["Smile Simulation", "Before/After Preview", "Custom Design Options"],
      image: "/placeholder-diwq6.png"
    },
    {
      title: "Custom Restoration Design",
      description: "Personalized design for crowns, bridges, and implant restorations",
      icon: Palette,
      features: ["Custom Shapes", "Color Matching", "Functional Design"],
      image: "/placeholder-kk841.png"
    },
    {
      title: "VR Treatment Planning",
      description: "Immersive virtual reality experience for treatment consultation",
      icon: Monitor,
      features: ["VR Consultation", "Interactive Planning", "Patient Education"],
      image: "/placeholder-0rbi0.png"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge 3D design and visualization services for modern dental implantology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/${locale}/idesign/services/${index + 1}`}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href={`/${locale}/idesign/services`}>
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
