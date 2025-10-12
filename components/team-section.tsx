import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Samir Hamimed",
      role: "Lead Dentist & Founder",
      specialties: ["General Dentistry", "Cosmetic Dentistry", "Implants"],
      education: "DDS, University of California",
      experience: "20+ years",
      image: "/image00003.jpeg",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialties: ["Orthodontics", "Invisalign", "Pediatric Care"],
      education: "DDS, Harvard School of Dental Medicine",
      experience: "15+ years",
      image: "/male-orthodontist-headshot.png",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Oral Surgeon",
      specialties: ["Oral Surgery", "Wisdom Teeth", "Dental Implants"],
      education: "DDS, NYU College of Dentistry",
      experience: "12+ years",
      image: "/professional-female-oral-surgeon.png",
    },
    {
      name: "Lisa Thompson",
      role: "Dental Hygienist",
      specialties: ["Preventive Care", "Cleanings", "Patient Education"],
      education: "RDH, Community College of Denver",
      experience: "10+ years",
      image: "/placeholder-kk841.png",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care in
            a comfortable and welcoming environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden bg-muted">
                  <img
                    src={member.image || "/logo.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>
                    <span className="font-medium">Education:</span> {member.education}
                  </div>
                  <div>
                    <span className="font-medium">Experience:</span> {member.experience}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
