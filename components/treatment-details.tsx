import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Calendar } from "lucide-react"

export function TreatmentDetails() {
  const treatments = [
    {
      name: "Professional Teeth Cleaning",
      category: "Preventive",
      duration: "45-60 min",
      price: "Starting at $120",
      description: "Comprehensive cleaning including plaque removal, polishing, and fluoride treatment.",
      features: ["Plaque & Tartar Removal", "Teeth Polishing", "Fluoride Treatment", "Oral Health Assessment"],
      popular: true,
    },
    {
      name: "Dental Implants",
      category: "Restorative",
      duration: "2-3 visits",
      price: "Starting at $3,500",
      description: "Permanent tooth replacement solution that looks and feels like natural teeth.",
      features: ["Titanium Implant", "Custom Crown", "Bone Grafting if Needed", "Lifetime Warranty"],
      popular: true,
    },
    {
      name: "Invisalign Treatment",
      category: "Orthodontic",
      duration: "12-18 months",
      price: "Starting at $4,500",
      description: "Clear aligners that gradually straighten teeth without traditional braces.",
      features: ["Custom Clear Aligners", "Progress Monitoring", "Retainers Included", "Digital Treatment Plan"],
      popular: true,
    },
    {
      name: "Teeth Whitening",
      category: "Cosmetic",
      duration: "60-90 min",
      price: "Starting at $450",
      description: "Professional whitening treatment for a brighter, more confident smile.",
      features: ["In-Office Treatment", "Custom Take-Home Kit", "Up to 8 Shades Lighter", "Touch-Up Treatments"],
      popular: false,
    },
    {
      name: "Root Canal Therapy",
      category: "Restorative",
      duration: "90-120 min",
      price: "Starting at $1,200",
      description: "Save infected or damaged teeth with advanced endodontic treatment.",
      features: ["Pain Relief", "Tooth Preservation", "Digital X-Rays", "Same-Day Crown Option"],
      popular: false,
    },
    {
      name: "Porcelain Veneers",
      category: "Cosmetic",
      duration: "2-3 visits",
      price: "Starting at $1,500/tooth",
      description: "Ultra-thin shells that transform the appearance of your front teeth.",
      features: ["Custom Design", "Stain Resistant", "Natural Appearance", "Minimal Tooth Preparation"],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Popular Treatments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Detailed information about our most requested dental treatments and procedures.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 relative">
              {treatment.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">Popular</Badge>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-fit text-xs">
                      {treatment.category}
                    </Badge>
                    <CardTitle className="font-heading text-xl">{treatment.name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">{treatment.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Treatment Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>{treatment.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-3">What's Included:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {treatment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
