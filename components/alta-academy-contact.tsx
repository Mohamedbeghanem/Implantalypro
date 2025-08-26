import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Mail, Phone, MapPin, Clock, Users, Award } from "lucide-react"
import { useLocale } from 'next-intl'

export function AltaAcademyContact() {
  const locale = useLocale()
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "admissions@altaacademy.com",
      description: "For course inquiries and applications"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Speak with our admissions team"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Education Drive, Suite 200",
      description: "Downtown Medical District"
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon-Fri: 9AM-6PM",
      description: "Weekend appointments available"
    }
  ]

  const programs = [
    {
      icon: GraduationCap,
      title: "Certificate Programs",
      description: "Professional certification in implant dentistry"
    },
    {
      icon: Users,
      title: "Group Training",
      description: "Small group sessions for hands-on learning"
    },
    {
      icon: Award,
      title: "CE Credits",
      description: "Continuing education credits for dental professionals"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
            Contact Alta Academy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to advance your dental career? Contact our admissions team to learn more about our programs and start your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 glass">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <Label htmlFor="program">Program of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advanced-surgery">Advanced Implant Surgery</SelectItem>
                    <SelectItem value="digital-planning">Digital Implant Planning</SelectItem>
                    <SelectItem value="all-on-4">All-on-4 Implant Mastery</SelectItem>
                    <SelectItem value="maintenance">Implant Maintenance & Complications</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your goals and how we can help you advance your career..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-blue-600 font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">
                Our Programs
              </h3>
              <div className="space-y-4">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{program.title}</h4>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-blue-600 text-white border-0">
              <h3 className="font-heading font-bold text-xl mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6">
                Schedule a consultation with our admissions team to discuss your career goals and find the perfect program for you.
              </p>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  Download Brochure
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
