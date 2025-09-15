import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Users, Award, BookOpen, Video, Calendar } from "lucide-react"
import Link from "next/link"
import { useLocale } from 'next-intl'

export function AltaAcademyCourses() {
  const locale = useLocale()
  
  const courses = [
    {
      id: 1,
      title: "Advanced Implant Surgery",
      description: "Master the latest techniques in dental implant surgery with hands-on training and expert guidance.",
      duration: "6 months",
      students: "24 students",
      level: "Advanced",
      features: ["Live Surgery Demonstrations", "Hands-on Practice", "CE Credits", "Certificate"],
      image: "/placeholder-diwq6.png",
      instructor: "Dr. Sarah Johnson",
      startDate: "March 15, 2024"
    },
    {
      id: 2,
      title: "Digital Implant Planning",
      description: "Learn digital workflow for implant planning using the latest software and technology.",
      duration: "3 months",
      students: "18 students",
      level: "Intermediate",
      features: ["Software Training", "Case Studies", "Digital Workflow", "Certification"],
      image: "/placeholder-0rbi0.png",
      instructor: "Dr. Michael Chen",
      startDate: "April 1, 2024"
    },
    {
      id: 3,
      title: "All-on-4 Implant Mastery",
      description: "Comprehensive training in All-on-4 implant techniques and full arch rehabilitation.",
      duration: "4 months",
      students: "20 students",
      level: "Advanced",
      features: ["Full Arch Training", "Live Cases", "Mentorship", "Advanced Certificate"],
      image: "/placeholder-kk841.png",
      instructor: "Dr. Emily Rodriguez",
      startDate: "May 10, 2024"
    },
    {
      id: 4,
      title: "Implant Maintenance & Complications",
      description: "Learn to handle implant complications and maintain long-term implant success.",
      duration: "2 months",
      students: "30 students",
      level: "All Levels",
      features: ["Complication Management", "Maintenance Protocols", "Troubleshooting", "CE Credits"],
      image: "/placeholder-diwq6.png",
      instructor: "Dr. David Thompson",
      startDate: "June 5, 2024"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Professional Development
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
            Dental Education Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advance your career with our comprehensive dental implant education programs designed by industry experts
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {course.level}
                  </Badge>
                </div>
                
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">{course.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">{course.startDate}</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/${locale}/alta-academy/courses/${course.id}`}>
                    Enroll Now
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-blue-600 text-white border-0">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-3xl mb-4">
                Ready to Advance Your Career?
              </h3>
              <p className="text-blue-100 mb-6">
                Join hundreds of dental professionals who have transformed their careers with Alta Academy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/alta-academy/contact`}>
                    Contact Admissions
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href={`/${locale}/alta-academy/courses`}>
                    View All Courses
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

