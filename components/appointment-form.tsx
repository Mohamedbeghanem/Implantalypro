"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Phone, Mail, MapPin } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useTranslations } from '@/hooks/use-translations'

export function AppointmentForm() {
  const { t } = useTranslations()
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [isNewPatient, setIsNewPatient] = useState(false)

  const timeSlots = [
    t('appointments.timeSlots.9am'),
    t('appointments.timeSlots.930am'),
    t('appointments.timeSlots.10am'),
    t('appointments.timeSlots.1030am'),
    t('appointments.timeSlots.11am'),
    t('appointments.timeSlots.1130am'),
    t('appointments.timeSlots.1pm'),
    t('appointments.timeSlots.130pm'),
    t('appointments.timeSlots.2pm'),
    t('appointments.timeSlots.230pm'),
    t('appointments.timeSlots.3pm'),
    t('appointments.timeSlots.330pm'),
    t('appointments.timeSlots.4pm'),
    t('appointments.timeSlots.430pm'),
  ]

  const services = [
    t('appointments.services.routineCleaning'),
    t('appointments.services.dentalExam'),
    t('appointments.services.teethWhitening'),
    t('appointments.services.filling'),
    t('appointments.services.crownBridge'),
    t('appointments.services.rootCanal'),
    t('appointments.services.dentalImplant'),
    t('appointments.services.orthodonticConsultation'),
    t('appointments.services.emergencyVisit'),
    t('appointments.services.other'),
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Appointment booked!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl">{t('appointments.title')}</CardTitle>
        <CardDescription>{t('appointments.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Type */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Are you a new patient?</Label>
            <RadioGroup
              value={isNewPatient ? "new" : "existing"}
              onValueChange={(value) => setIsNewPatient(value === "new")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">{t('appointments.form.newPatient')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existing" id="existing" />
                <Label htmlFor="existing">{t('appointments.form.existingPatient')}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="Enter your first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Enter your last name" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Preferred Time *</Label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(time)}
                  className="text-xs"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service">{t('appointments.form.service')} *</Label>
            <Select value={appointmentType} onValueChange={setAppointmentType}>
              <SelectTrigger>
                <SelectValue placeholder="Select the type of service you need" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Insurance Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="insurance">{t('appointments.form.insuranceProvider')}</Label>
              <Input id="insurance" placeholder="e.g., Delta Dental, Aetna" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="memberId">{t('appointments.form.memberId')}</Label>
              <Input id="memberId" placeholder="Insurance member ID" />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <Label htmlFor="notes">{t('appointments.form.additionalNotes')}</Label>
            <Textarea
              id="notes"
              placeholder="Please describe any specific concerns, symptoms, or special requests..."
              rows={4}
            />
          </div>

          {/* Emergency Contact */}
          {isNewPatient && (
            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground">{t('appointments.form.emergencyContact')} (New Patients)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">{t('appointments.form.emergencyContactName')}</Label>
                  <Input id="emergencyName" placeholder="Emergency contact name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">{t('appointments.form.emergencyContactPhone')}</Label>
                  <Input id="emergencyPhone" type="tel" placeholder="Emergency contact phone" />
                </div>
              </div>
            </div>
          )}

          {/* Consent */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="consent" />
              <Label htmlFor="consent" className="text-sm leading-relaxed">
                I consent to receive appointment reminders via text message and email
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the terms and conditions and privacy policy *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            Book Appointment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
