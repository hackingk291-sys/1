"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [appointmentData, setAppointmentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })
  const [availableSlots, setAvailableSlots] = useState([])
  const [appointmentResult, setAppointmentResult] = useState(null)

  const services = [
    { id: "sports-injury", name: "Sports Injury Recovery", duration: "45-60 min", price: "From ₹1,500" },
    { id: "pain-management", name: "Pain Management", duration: "30-45 min", price: "From ₹1,200" },
    { id: "post-surgery", name: "Post-Surgery Rehabilitation", duration: "60 min", price: "From ₹1,800" },
    { id: "injury-prevention", name: "Injury Prevention", duration: "45 min", price: "From ₹1,000" },
    { id: "geriatric", name: "Geriatric Physiotherapy", duration: "45 min", price: "From ₹1,300" },
    { id: "manual-therapy", name: "Manual Therapy", duration: "30-45 min", price: "From ₹1,400" },
    { id: "neurological", name: "Neurological Rehabilitation", duration: "60 min", price: "From ₹2,000" },
    { id: "strength-conditioning", name: "Strength & Conditioning", duration: "45-60 min", price: "From ₹1,100" },
  ]

  const handleInputChange = (field, value) => {
    setAppointmentData((prev) => ({ ...prev, [field]: value }))
  }

  const checkAvailability = async (date) => {
    if (!date) return

    setLoading(true)
    try {
      const response = await fetch(`/api/availability?date=${date}`)
      const data = await response.json()

      if (data.success && data.available) {
        setAvailableSlots(data.timeSlots || [])
      } else {
        setAvailableSlots([])
      }
    } catch (error) {
      console.error("Error checking availability:", error)
      setAvailableSlots([])
    } finally {
      setLoading(false)
    }
  }

  const handleDateChange = (date) => {
    handleInputChange("preferredDate", date)
    handleInputChange("preferredTime", "") // Reset time selection
    checkAvailability(date)
  }

  const submitAppointment = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      })

      const data = await response.json()

      if (data.success) {
        setAppointmentResult(data)
        setStep(4) // Success step
      } else {
        alert(data.error || "Failed to book appointment")
      }
    } catch (error) {
      console.error("Error booking appointment:", error)
      alert("Failed to book appointment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const canProceedFromStep1 =
    appointmentData.firstName && appointmentData.lastName && appointmentData.email && appointmentData.phone
  const canProceedFromStep2 = appointmentData.service
  const canProceedFromStep3 = appointmentData.preferredDate && appointmentData.preferredTime

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation with our expert physiotherapists. We'll help you on your path to recovery.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= stepNum ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > stepNum ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`w-8 sm:w-12 h-0.5 mx-2 transition-colors ${
                        step > stepNum ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl sm:text-2xl">
                {step === 1 && "Personal Information"}
                {step === 2 && "Select Service"}
                {step === 3 && "Choose Date & Time"}
                {step === 4 && "Appointment Confirmed"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={appointmentData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={appointmentData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className="h-11"
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
                      value={appointmentData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={appointmentData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      value={appointmentData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your condition or any specific concerns..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={nextStep}
                      disabled={!canProceedFromStep1}
                      className="bg-primary hover:bg-primary/90 h-11"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Service Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          appointmentData.service === service.id ? "ring-2 ring-primary bg-primary/5" : ""
                        }`}
                        onClick={() => handleInputChange("service", service.id)}
                      >
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-base">{service.name}</h3>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                              <Badge variant="secondary" className="text-xs w-fit">
                                <Clock className="w-3 h-3 mr-1" />
                                {service.duration}
                              </Badge>
                              <span className="text-sm font-medium text-primary">{service.price}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep} className="h-11 bg-transparent">
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!canProceedFromStep2}
                      className="bg-primary hover:bg-primary/90 h-11"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time Selection */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium">
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={appointmentData.preferredDate}
                        onChange={(e) => handleDateChange(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="h-11"
                      />
                    </div>

                    {appointmentData.preferredDate && (
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Available Time Slots *</Label>
                        {loading ? (
                          <div className="flex items-center justify-center py-8">
                            <Loader2 className="w-6 h-6 animate-spin text-primary" />
                            <span className="ml-2 text-muted-foreground">Checking availability...</span>
                          </div>
                        ) : availableSlots.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                            {availableSlots.map((slot) => (
                              <Button
                                key={slot.time}
                                variant={appointmentData.preferredTime === slot.time ? "default" : "outline"}
                                size="sm"
                                disabled={!slot.available}
                                onClick={() => handleInputChange("preferredTime", slot.time)}
                                className="h-10 text-xs"
                              >
                                {slot.displayTime}
                              </Button>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                            <p>No available slots for this date. Please select another date.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={prevStep} className="h-11 bg-transparent">
                      Previous
                    </Button>
                    <Button
                      onClick={submitAppointment}
                      disabled={!canProceedFromStep3 || loading}
                      className="bg-primary hover:bg-primary/90 h-11"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        "Book Appointment"
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && appointmentResult && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-green-600">Appointment Booked Successfully!</h3>
                    <p className="text-muted-foreground">{appointmentResult.message}</p>
                  </div>

                  <Card className="bg-muted/30">
                    <CardContent className="p-4 space-y-3">
                      <div className="text-sm">
                        <strong>Appointment ID:</strong> {appointmentResult.appointmentId}
                      </div>
                      <div className="text-sm">
                        <strong>Name:</strong> {appointmentResult.details.name}
                      </div>
                      <div className="text-sm">
                        <strong>Service:</strong>{" "}
                        {services.find((s) => s.id === appointmentResult.details.service)?.name}
                      </div>
                      <div className="text-sm">
                        <strong>Date:</strong> {new Date(appointmentResult.details.preferredDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm">
                        <strong>Time:</strong> {appointmentResult.details.preferredTime}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <Button
                      onClick={() => (window.location.href = "/")}
                      className="bg-primary hover:bg-primary/90 h-11"
                    >
                      Return to Home
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Please save your appointment ID for future reference.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
