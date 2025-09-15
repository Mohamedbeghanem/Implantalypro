import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Users, Award, BookOpen, Calendar, MapPin, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLocale } from 'next-intl'

interface AltaAcademyCourseDetailProps {
  courseId: string
}

export function AltaAcademyCourseDetail({ courseId }: AltaAcademyCourseDetailProps) {
  const locale = useLocale()
  
  // Mock course data - in a real app, this would come from an API
  const courseData = {
    1: {
      title: "Advanced Implant Surgery",
      description: "Master the latest techniques in dental implant surgery with hands-on training and expert guidance. This comprehensive program covers advanced surgical protocols, bone grafting techniques, and complex case management.",
      duration: "6 months",
      students: "24 students",
      level: "Advanced",

      instructor: "Dr. Sarah Johnson",
      startDate: "March 15, 2024",
      location: "Alta Academy Training Center",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder-diwq6.png",
      features: ["Live Surgery Demonstrations", "Hands-on Practice", "CE Credits", "Certificate", "Mentorship Program", "Case Studies"],
      curriculum: [
        {
          week: "Week 1-2",
          title: "Advanced Surgical Techniques",
          topics: ["Flap Design & Management", "Bone Grafting Protocols", "Sinus Lift Procedures"]
        },
        {
          week: "Week 3-4",
          title: "Complex Case Planning",
          topics: ["Treatment Planning", "Risk Assessment", "Patient Selection Criteria"]
        },
        {
          week: "Week 5-6",
          title: "Hands-on Training",
          topics: ["Live Surgery Participation", "Surgical Guide Fabrication", "Post-operative Care"]
        }
      ],
      requirements: [
        "DDS or DMD degree",
        "Basic implant experience",
        "Current dental license",
        "Malpractice insurance"
      ]
    },
    2: {
      title: "Digital Implant Planning",
      description: "Learn digital workflow for implant planning using the latest software and technology. Master CBCT analysis, virtual implant placement, and surgical guide design.",
      duration: "3 months",
      students: "18 students",
      level: "Intermediate",

      instructor: "Dr. Michael Chen",
      startDate: "April 1, 2024",
      location: "Alta Academy Training Center",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder-0rbi0.png",
      features: ["Software Training", "Case Studies", "Digital Workflow", "Certification", "Online Support", "Lifetime Access"],
      curriculum: [
        {
          week: "Week 1-2",
          title: "Digital Fundamentals",
          topics: ["CBCT Analysis", "Software Navigation", "Digital Anatomy"]
        },
        {
          week: "Week 3-4",
          title: "Virtual Planning",
          topics: ["Implant Placement", "Surgical Guide Design", "Treatment Simulation"]
        }
      ],
      requirements: [
        "Basic computer skills",
        "Dental background preferred",
        "Access to planning software"
      ]
    },
    3: {
      title: "All-on-4 Implant Mastery",
      description: "Comprehensive training in All-on-4 implant techniques and full arch rehabilitation. Learn to restore full arches with immediate loading protocols.",
      duration: "4 months",
      students: "20 students",
      level: "Advanced",

      instructor: "Dr. Emily Rodriguez",
      startDate: "May 10, 2024",
      location: "Alta Academy Training Center",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder-kk841.png",
      features: ["Full Arch Training", "Live Cases", "Mentorship", "Advanced Certificate", "Hands-on Practice", "Case Documentation"],
      curriculum: [
        {
          week: "Week 1-2",
          title: "All-on-4 Fundamentals",
          topics: ["Treatment Planning", "Patient Selection", "Surgical Protocol"]
        },
        {
          week: "Week 3-4",
          title: "Advanced Techniques",
          topics: ["Immediate Loading", "Prosthetic Design", "Complication Management"]
        }
      ],
      requirements: [
        "Advanced implant experience",
        "Full arch restoration knowledge",
        "Surgical proficiency"
      ]
    },
    4: {
      title: "Implant Maintenance & Complications",
      description: "Learn to handle implant complications and maintain long-term implant success. Master troubleshooting and maintenance protocols.",
      duration: "2 months",
      students: "30 students",
      level: "All Levels",

      instructor: "Dr. David Thompson",
      startDate: "June 5, 2024",
      location: "Alta Academy Training Center",
      rating: 4.7,
      reviews: 203,
      image: "/placeholder-diwq6.png",
      features: ["Complication Management", "Maintenance Protocols", "Troubleshooting", "CE Credits", "Case Studies", "Best Practices"],
      curriculum: [
        {
          week: "Week 1",
          title: "Maintenance Protocols",
          topics: ["Preventive Care", "Monitoring Systems", "Patient Education"]
        },
        {
          week: "Week 2",
          title: "Complication Management",
          topics: ["Diagnosis", "Treatment Options", "Prevention Strategies"]
        }
      ],
      requirements: [
        "Dental background",
        "Interest in implant maintenance",
        "Basic implant knowledge"
      ]
    }
  }

  const course = courseData[courseId as '1' | '2' | '3']

  if (!course) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <Button asChild>
          <Link href={`/${locale}/alta-academy/courses`}>Back to Courses</Link>
        </Button>
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href={`/${locale}/alta-academy/courses`}>
              ← Back to Courses
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                {course.level} Level
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {course.description}
              </p>
              
              {/* Course Stats */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-muted-foreground">{course.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-muted-foreground">{course.duration}</span>
                </div>
              </div>
            </div>

                         {/* Enrollment Card */}
             <Card className="p-6 h-fit border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
               <div className="text-center mb-6">
                 <h3 className="text-xl font-bold text-blue-600 mb-2">Professional Course</h3>
                 <p className="text-muted-foreground">Contact us for pricing</p>
               </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Starts {course.startDate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{course.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Instructor: {course.instructor}</span>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
                Enroll Now
              </Button>
              <Button variant="outline" className="w-full">
                Download Syllabus
              </Button>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Image */}
            <Card className="overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
            </Card>

            {/* Curriculum */}
            <Card className="p-6 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-foreground mb-2">{module.week}: {module.title}</h3>
                    <ul className="space-y-1">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Requirements */}
            <Card className="p-6 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">
                Requirements
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="p-6 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                What's Included
              </h3>
              <div className="space-y-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Instructor */}
            <Card className="p-6 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                Meet Your Instructor
              </h3>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{course.instructor}</h4>
                <p className="text-sm text-muted-foreground">
                  Expert instructor with years of experience in dental implantology
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
