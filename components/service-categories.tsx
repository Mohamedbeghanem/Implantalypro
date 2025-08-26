import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smile, Shield, Zap, Heart, Baby, Wrench } from "lucide-react"

export function ServiceCategories() {
  const categories = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health care for the whole family",
      services: [
        "Regular Cleanings",
        "Dental Exams",
        "Cavity Fillings",
        "Fluoride Treatments",
        "Oral Cancer Screening",
      ],
      popular: true,
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive treatments to maintain your oral health",
      services: ["Dental Sealants", "Night Guards", "Periodontal Therapy", "Deep Cleanings", "X-Rays"],
      popular: false,
    },
    {
      icon: Zap,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic procedures",
      services: ["Teeth Whitening", "Porcelain Veneers", "Dental Bonding", "Smile Makeovers", "Gum Contouring"],
      popular: true,
    },
    {
      icon: Heart,
      title: "Restorative Care",
      description: "Restore function and beauty to damaged teeth",
      services: ["Dental Implants", "Crowns & Bridges", "Root Canal Therapy", "Dentures", "Inlays & Onlays"],
      popular: false,
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children and teens",
      services: [
        "Children's Cleanings",
        "Fluoride Treatments",
        "Dental Sealants",
        "Space Maintainers",
        "Habit Counseling",
      ],
      popular: false,
    },
    {
      icon: Wrench,
      title: "Orthodontics",
      description: "Straighten teeth and correct bite issues",
      services: ["Traditional Braces", "Invisalign", "Retainers", "Bite Correction", "Early Intervention"],
      popular: true,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Our Service Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive dental services across multiple specialties to meet all your oral health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 relative">
              {category.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">Popular</Badge>
              )}
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-heading text-xl">{category.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
