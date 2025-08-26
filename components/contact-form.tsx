"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Phone, Mail } from "lucide-react"

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState("")
  const [preferredContact, setPreferredContact] = useState("")

  const inquiryTypes = [
    "General Information",
    "Appointment Scheduling",
    "Insurance Questions",
    "Treatment Consultation",
    "Billing Inquiry",
    "Emergency",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted!")
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
        <CardDescription>
          Have a question or need more information? Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactFirstName">First Name *</Label>
              <Input id="contactFirstName" placeholder="Enter your first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactLastName">Last Name *</Label>
              <Input id="contactLastName" placeholder="Enter your last name" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email Address *</Label>
              <Input id="contactEmail" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input id="contactPhone" type="tel" placeholder="(555) 123-4567" />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <Label htmlFor="inquiryType">Type of Inquiry *</Label>
            <Select value={inquiryType} onValueChange={setInquiryType}>
              <SelectTrigger>
                <SelectValue placeholder="Select the type of inquiry" />
              </SelectTrigger>
              <SelectContent>
                {inquiryTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Preferred Contact Method</Label>
            <RadioGroup value={preferredContact} onValueChange={setPreferredContact}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Please describe your question or concern in detail..."
              rows={6}
              required
            />
          </div>

          {/* Best Time to Contact */}
          <div className="space-y-2">
            <Label htmlFor="bestTime">Best Time to Contact</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                I would like to receive updates about services and promotions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" required />
              <Label htmlFor="privacy" className="text-sm leading-relaxed">
                I agree to the privacy policy and terms of service *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>

          {/* Response Time */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">We typically respond within 24 hours during business days</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
