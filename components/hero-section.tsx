import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MapPin, Clock, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Expert <span className="text-primary">Physiotherapy</span> Care for Your Recovery
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                Professional rehabilitation services to help you recover from injuries, manage pain, and improve your
                quality of life with personalized treatment plans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 sm:h-auto">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-12 sm:h-auto bg-transparent">
                Learn More About Us
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 lg:pt-8">
              <Card className="p-3 sm:p-4 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Convenient Location</p>
              </Card>
              <Card className="p-3 sm:p-4 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Flexible Hours</p>
              </Card>
              <Card className="p-3 sm:p-4 text-center">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Expert Care</p>
              </Card>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/professional-physiotherapist-helping-patient-with-.jpg"
                alt="Professional physiotherapy treatment session"
                width={500}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover object-center-top"
                priority
              />
            </div>
            <Card className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 sm:p-6 bg-card shadow-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Patients</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
