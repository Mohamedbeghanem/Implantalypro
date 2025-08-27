import { Card } from "@/components/ui/card"
import { Box, Eye, Monitor, Smartphone, Zap, Globe } from "lucide-react"

export function IDesignTechnology() {
  const technologies = [
    {
      icon: Box,
      title: "3D Modeling Software",
      description: "Advanced CAD/CAM technology for precise dental design"
    },
    {
      icon: Eye,
      title: "Virtual Reality",
      description: "Immersive VR experience for treatment planning"
    },
    {
      icon: Monitor,
      title: "Digital Scanning",
      description: "High-resolution intraoral scanning technology"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Patient-friendly mobile applications for consultation"
    },
    {
      icon: Zap,
      title: "AI-Powered Design",
      description: "Artificial intelligence for automated design suggestions"
    },
    {
      icon: Globe,
      title: "Cloud Platform",
      description: "Secure cloud-based design collaboration"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art tools and software for exceptional dental design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                             <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                 <tech.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
               </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
