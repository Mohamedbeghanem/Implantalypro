import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Star, Users } from "lucide-react"

export function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with kindness, understanding, and respect, ensuring comfort throughout their visit.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We maintain the highest standards of sterilization and safety protocols to protect our patients and staff.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We continuously invest in the latest technology and training to provide the best possible dental care.",
    },
    {
      icon: Users,
      title: "Family Focus",
      description:
        "We welcome patients of all ages and strive to make dental care accessible and comfortable for families.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Our Mission & Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide comprehensive, high-quality dental care that improves the oral health and overall
            well-being of our patients. We are committed to creating lasting relationships built on trust, excellence,
            and personalized care.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
