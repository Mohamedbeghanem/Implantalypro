import { Card } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Clock, Globe } from "lucide-react"

interface AltaAcademyFeaturesProps {
  locale: string
}

export function AltaAcademyFeatures({ locale }: AltaAcademyFeaturesProps) {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from world-renowned dental professionals with decades of experience"
    },
    {
      icon: Users,
      title: "Interactive Learning",
      description: "Hands-on workshops and live demonstrations in small group settings"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From fundamentals to advanced techniques in implant dentistry"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Internationally recognized credentials and continuing education credits"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Online and in-person options to fit your busy schedule"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with dental professionals from around the world"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Why Choose Alta Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development designed to elevate your dental career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
