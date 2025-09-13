import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, Heart, Target, Shield, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              About <span className="text-primary">Shivam Physio Care</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional physiotherapy care with a patient-centered approach that focuses on
              healing, recovery, and long-term wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to provide world-class physiotherapy services, Shivam Physio Care has been
                  serving the community for over a decade. Our journey began with a simple belief: every patient
                  deserves personalized, compassionate care that addresses their unique needs.
                </p>
                <p>
                  What started as a small clinic has grown into a comprehensive rehabilitation center, equipped with
                  modern facilities and staffed by highly qualified professionals. We have successfully treated
                  thousands of patients, helping them regain mobility, reduce pain, and improve their quality of life.
                </p>
                <p>
                  Our commitment to excellence and continuous learning ensures that we stay at the forefront of
                  physiotherapy practices, incorporating the latest techniques and technologies to deliver the best
                  possible outcomes for our patients.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/modern-physiotherapy-clinic-interior-with-equi.jpg"
                alt="Modern physiotherapy clinic interior"
                width={500}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Our <span className="text-primary">Mission & Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional physiotherapy care that empowers patients to achieve optimal health, mobility,
                  and quality of life through evidence-based treatments and compassionate service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading physiotherapy clinic in the region, recognized for our innovative treatments,
                  exceptional patient outcomes, and commitment to advancing the field of rehabilitation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, excellence, compassion, and innovation guide everything we do. We believe in treating each
                  patient with respect, dignity, and the highest standard of professional care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Meet Our <span className="text-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our team of qualified physiotherapists brings years of experience and specialized training to provide you
              with the best possible care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Shivam Patel</h3>
                    <p className="text-primary font-medium">Lead Physiotherapist & Founder</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">MPT</Badge>
                    <Badge variant="secondary">15+ Years</Badge>
                    <Badge variant="secondary">Sports Rehab</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized in sports injury rehabilitation and manual therapy with extensive experience in treating
                    professional athletes and chronic pain patients.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Priya Sharma</h3>
                    <p className="text-primary font-medium">Senior Physiotherapist</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">BPT</Badge>
                    <Badge variant="secondary">10+ Years</Badge>
                    <Badge variant="secondary">Neuro Rehab</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expert in neurological rehabilitation and geriatric physiotherapy, helping patients recover from
                    strokes, spinal injuries, and age-related mobility issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
                    <p className="text-primary font-medium">Orthopedic Specialist</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">MPT</Badge>
                    <Badge variant="secondary">12+ Years</Badge>
                    <Badge variant="secondary">Orthopedic</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specializes in post-surgical rehabilitation and orthopedic conditions, with a focus on joint
                    replacement recovery and musculoskeletal disorders.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-4">
              Our <span className="text-primary-foreground/90">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <p className="text-primary-foreground/90">Happy Patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">10+</div>
              <p className="text-primary-foreground/90">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">95%</div>
              <p className="text-primary-foreground/90">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">24/7</div>
              <p className="text-primary-foreground/90">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
            Ready to Start Your <span className="text-primary">Recovery Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Contact us today to schedule your consultation and take the first step towards better health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Clinic
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
