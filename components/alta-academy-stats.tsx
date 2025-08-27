import { Card } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

export function AltaAcademyStats() {
  const stats = [
    {
      icon: GraduationCap,
      number: "500+",
      label: "Graduates",
      description: "Successful dental professionals"
    },
    {
      icon: Users,
      number: "50+",
      label: "Courses",
      description: "Comprehensive programs"
    },
    {
      icon: BookOpen,
      number: "1000+",
      label: "Hours",
      description: "Of educational content"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Student satisfaction"
    }
  ]

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">
            Alta Academy by the Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to excellence in dental education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="font-heading font-bold text-4xl text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
