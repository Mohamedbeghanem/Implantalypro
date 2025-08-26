import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface AltaAcademyTestimonialsProps {
  locale: string
}

export function AltaAcademyTestimonials({ locale }: AltaAcademyTestimonialsProps) {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "General Dentist",
      content: "Alta Academy transformed my approach to implant dentistry. The hands-on training and expert guidance have been invaluable to my practice.",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Oral Surgeon",
      content: "The advanced implant surgery course exceeded my expectations. I've gained confidence in handling complex cases I never thought possible.",
      rating: 5,
      image: "/placeholder-user.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Prosthodontist",
      content: "The digital planning course opened up new possibilities for my practice. The technology integration has improved my treatment outcomes significantly.",
      rating: 5,
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            What Our Graduates Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from dental professionals who have advanced their careers with Alta Academy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
