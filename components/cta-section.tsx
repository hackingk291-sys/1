import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty max-w-3xl mx-auto mb-8">
            Take the first step towards better health and mobility. Book your consultation today and let us help you
            achieve your recovery goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>

        <Card className="bg-background/10 backdrop-blur border-primary-foreground/20">
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <Phone className="w-8 h-8 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Call Us</h3>
                <p className="text-primary-foreground/90">+91 98765 43210</p>
                <p className="text-sm text-primary-foreground/70">Mon-Sat: 9AM-7PM</p>
              </div>

              <div className="space-y-2">
                <Mail className="w-8 h-8 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Email Us</h3>
                <p className="text-primary-foreground/90">info@shivamphysiocare.com</p>
                <p className="text-sm text-primary-foreground/70">24/7 Support</p>
              </div>

              <div className="space-y-2">
                <MapPin className="w-8 h-8 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Visit Us</h3>
                <p className="text-primary-foreground/90">123 Health Street</p>
                <p className="text-sm text-primary-foreground/70">City Center, State 12345</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
