"use client"

import { useTranslations } from '@/hooks/use-translations'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content: "Dr. Chen and his team are absolutely amazing! They made my dental implant procedure completely painless and comfortable. The entire staff is professional and caring.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Patient",
    content: "I was terrified of going to the dentist, but Implantaly Group changed everything. Their gentle approach and modern technology made my experience so much better than I expected.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Patient",
    content: "The teeth whitening treatment exceeded my expectations! The results are natural and beautiful. I couldn't be happier with my new smile.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Patient",
    content: "Professional, caring, and excellent results. My orthodontic treatment was completed ahead of schedule and the results are perfect. Highly recommend!",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Patient",
    content: "The emergency care I received was outstanding. They fit me in immediately and resolved my toothache quickly. The follow-up care was equally impressive.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Patient",
    content: "From the moment I walked in, I felt welcomed and cared for. The preventive care program they set up for me has kept my teeth healthy for years.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  }
]

export function TestimonialsSection() {
  const { t } = useTranslations()

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('testimonials.readMore')}
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80 font-medium">
            {t('testimonials.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
