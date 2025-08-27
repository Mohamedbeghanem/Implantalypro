import { Card } from "@/components/ui/card"
import { Search, Eye, Palette, CheckCircle } from "lucide-react"

export function IDesignProcess() {
  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description: "Comprehensive evaluation of your dental needs and goals"
    },
    {
      icon: Eye,
      title: "Visualization",
      description: "3D scanning and digital modeling of your current situation"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Custom design creation with multiple options for your review"
    },
    {
      icon: CheckCircle,
      title: "Approval",
      description: "Final design approval and treatment planning"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Design Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined approach to creating your perfect dental design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-purple-200 dark:bg-purple-800 transform translate-x-4"></div>
                )}
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {index + 1}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
