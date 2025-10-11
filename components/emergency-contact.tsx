"use client"

import { useTranslations } from 'next-intl'
import { Phone, Clock, AlertTriangle, MapPin, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function EmergencyContact() {
  const t = useTranslations('emergency')

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emergency Dental Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dental emergencies can happen at any time. We're here to help when you need us most with 24/7 emergency care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Emergency Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                When to Call for Emergency Care
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Severe toothache or dental pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Broken or chipped tooth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Knocked-out tooth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Bleeding gums or mouth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Swelling in mouth or face</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lost filling or crown</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">24/7 Emergency Line</h4>
                  <p className="text-sm text-muted-foreground">Always available for urgent care</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Same-Day Appointments</h4>
                  <p className="text-sm text-muted-foreground">Quick access when you need it</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get Help Now</h3>
            
            <div className="space-y-6">
              {/* Emergency Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-red-100">Emergency Hotline</div>
                  <div className="text-xl font-bold">(555) 123-4567</div>
                </div>
              </div>

              {/* Regular Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-red-100">Office Hours</div>
                  <div className="font-semibold">Mon-Fri: 8AM-6PM</div>
                  <div className="font-semibold">Sat: 9AM-3PM</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-red-100">Location</div>
                  <div className="font-semibold">123 Dental Street</div>
                  <div className="font-semibold">City, State 12345</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <Button 
                className="w-full bg-white text-red-600 hover:bg-white/90 font-semibold"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Line
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10"
                size="lg"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <p className="text-sm text-red-100">
                <strong>Important:</strong> For life-threatening emergencies, please call 911 or visit your nearest emergency room immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
