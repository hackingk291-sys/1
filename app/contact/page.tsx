"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AppointmentButton } from "@/components/appointment-button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  Car,
  Bus,
  NavigationIcon,
  Loader2,
  AlertCircle,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false,
        })
      } else {
        setError(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setError("Failed to send message. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const canSubmit =
    formData.firstName && formData.lastName && formData.email && formData.message && formData.consent && !loading

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Ready to start your recovery journey? Contact us today to schedule your consultation or learn more about
              our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-balance mb-4 sm:mb-6">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                  We're here to help you on your path to recovery. Reach out to us through any of the following methods,
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <Card className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Call us for immediate assistance</p>
                        <p className="font-medium text-primary text-sm sm:text-base">+91 98765 43210</p>
                        <Badge variant="secondary" className="text-xs">
                          Available Mon-Sat: 9AM-7PM
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Send us a detailed message</p>
                        <p className="font-medium text-primary text-sm sm:text-base break-all">
                          info@shivamphysiocare.com
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          24/7 Support
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg">Visit Our Clinic</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Come see us in person</p>
                        <p className="font-medium text-sm sm:text-base">123 Health Street</p>
                        <p className="text-muted-foreground text-sm sm:text-base">City Center, State 12345</p>
                        <Badge variant="secondary" className="text-xs">
                          Free Parking Available
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="space-y-2 min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg">Operating Hours</h3>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Monday - Friday:</span>
                            <span className="font-medium">9:00 AM - 7:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Saturday:</span>
                            <span className="font-medium">9:00 AM - 5:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sunday:</span>
                            <span className="font-medium">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-first lg:order-last">
              <Card className="shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <h4 className="font-medium text-green-800">Message Sent Successfully!</h4>
                          <p className="text-sm text-green-700">
                            Thank you for your message. We will get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <div>
                          <h4 className="font-medium text-red-800">Error</h4>
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          required
                          className="h-11"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          required
                          className="h-11"
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="h-11"
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="h-11"
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
                        disabled={loading}
                      >
                        <option value="">Select a service</option>
                        <option value="sports-injury">Sports Injury Recovery</option>
                        <option value="pain-management">Pain Management</option>
                        <option value="post-surgery">Post-Surgery Rehabilitation</option>
                        <option value="injury-prevention">Injury Prevention</option>
                        <option value="geriatric">Geriatric Physiotherapy</option>
                        <option value="manual-therapy">Manual Therapy</option>
                        <option value="neurological">Neurological Rehabilitation</option>
                        <option value="strength-conditioning">Strength & Conditioning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your condition, symptoms, or any questions you have..."
                        rows={4}
                        required
                        className="resize-none"
                        disabled={loading}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="rounded border-input mt-1"
                        required
                        disabled={loading}
                      />
                      <Label htmlFor="consent" className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        I consent to being contacted by Shivam Physio Care regarding my inquiry. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={!canSubmit}
                      className="w-full bg-primary hover:bg-primary/90 h-12"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
              Quick <span className="text-primary">Actions</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Need immediate assistance? Use these quick options to get in touch with us right away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Book Appointment</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Schedule your consultation online</p>
                <AppointmentButton className="h-10 sm:h-auto">Book Now</AppointmentButton>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Emergency Call</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Call us for urgent assistance</p>
                <Button variant="outline" className="h-10 sm:h-auto bg-transparent">
                  Call +91 98765 43210
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <NavigationIcon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Get Directions</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Find your way to our clinic</p>
                <Button variant="outline" className="h-10 sm:h-auto bg-transparent">
                  View Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                Easy to <span className="text-primary">Find Us</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our clinic is conveniently located in the heart of the city with easy access to public transportation
                and ample parking facilities.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Free parking available on-site</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bus className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Bus stop 2 minutes walk away</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Wheelchair accessible entrance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">Ground floor location</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 sm:h-auto">
                <NavigationIcon className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>

            <div className="relative order-first lg:order-last">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto" />
                    <p className="text-sm sm:text-base text-muted-foreground">Interactive Map</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">123 Health Street, City Center</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
