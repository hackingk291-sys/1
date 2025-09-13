import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Heart,
  Zap,
  Shield,
  Users,
  Stethoscope,
  Brain,
  Dumbbell,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Sports Injury Recovery",
    description: "Comprehensive rehabilitation for athletes and sports enthusiasts to return to peak performance.",
    features: [
      "Pre-sport injury assessment",
      "Acute injury management",
      "Return-to-sport protocols",
      "Performance enhancement",
      "Injury prevention programs",
    ],
    duration: "4-12 weeks",
    price: "₹2,000 - ₹5,000",
    category: "Sports Medicine",
  },
  {
    icon: Heart,
    title: "Pain Management",
    description: "Evidence-based approaches to reduce chronic and acute pain using modern therapeutic techniques.",
    features: [
      "Chronic pain assessment",
      "Manual therapy techniques",
      "Exercise prescription",
      "Pain education",
      "Lifestyle modification",
    ],
    duration: "6-16 weeks",
    price: "₹1,500 - ₹4,000",
    category: "Pain Relief",
  },
  {
    icon: Zap,
    title: "Post-Surgery Rehabilitation",
    description: "Specialized post-operative care to ensure optimal recovery and restore full functionality.",
    features: [
      "Post-surgical assessment",
      "Wound care guidance",
      "Mobility restoration",
      "Strength rebuilding",
      "Functional training",
    ],
    duration: "8-20 weeks",
    price: "₹2,500 - ₹6,000",
    category: "Rehabilitation",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Proactive programs designed to prevent injuries and maintain long-term physical health.",
    features: [
      "Movement screening",
      "Postural assessment",
      "Ergonomic advice",
      "Strengthening programs",
      "Education workshops",
    ],
    duration: "4-8 weeks",
    price: "₹1,000 - ₹3,000",
    category: "Prevention",
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    description: "Specialized care for elderly patients focusing on mobility, balance, and independence.",
    features: [
      "Fall risk assessment",
      "Balance training",
      "Mobility aids training",
      "Cognitive exercises",
      "Home safety evaluation",
    ],
    duration: "6-12 weeks",
    price: "₹1,800 - ₹4,500",
    category: "Senior Care",
  },
  {
    icon: Stethoscope,
    title: "Manual Therapy",
    description: "Hands-on treatment techniques to improve mobility and reduce pain effectively.",
    features: [
      "Joint mobilization",
      "Soft tissue massage",
      "Trigger point therapy",
      "Myofascial release",
      "Spinal manipulation",
    ],
    duration: "2-8 weeks",
    price: "₹1,200 - ₹3,500",
    category: "Manual Treatment",
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    description: "Specialized treatment for patients with neurological conditions and brain injuries.",
    features: [
      "Stroke rehabilitation",
      "Spinal cord injury care",
      "Balance retraining",
      "Gait training",
      "Cognitive rehabilitation",
    ],
    duration: "12-24 weeks",
    price: "₹3,000 - ₹7,000",
    category: "Neurology",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Customized fitness programs to improve strength, endurance, and overall physical performance.",
    features: [
      "Fitness assessment",
      "Personalized workout plans",
      "Progressive overload training",
      "Functional movement",
      "Performance monitoring",
    ],
    duration: "8-16 weeks",
    price: "₹2,200 - ₹5,500",
    category: "Fitness",
  },
]

const treatmentProcess = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "Comprehensive evaluation of your condition, medical history, and treatment goals.",
  },
  {
    step: "02",
    title: "Treatment Planning",
    description: "Development of a personalized treatment plan tailored to your specific needs.",
  },
  {
    step: "03",
    title: "Active Treatment",
    description: "Implementation of evidence-based therapies and exercises under expert guidance.",
  },
  {
    step: "04",
    title: "Progress Monitoring",
    description: "Regular assessment and adjustment of treatment based on your progress.",
  },
  {
    step: "05",
    title: "Recovery & Maintenance",
    description: "Transition to independent management with ongoing support and follow-up.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Comprehensive physiotherapy services designed to address your unique needs and help you achieve optimal
              health and mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-muted-foreground">
                            + {service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </div>
                        <div className="text-sm font-semibold text-primary">{service.price}</div>
                      </div>
                      <Button size="sm" variant="outline" className="group/btn bg-transparent">
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Our <span className="text-primary">Treatment Process</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              A systematic approach to ensure you receive the most effective care tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {treatmentProcess.map((process, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
              Our <span className="text-primary">Specializations</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We specialize in treating a wide range of conditions with evidence-based approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Back & Neck Pain",
              "Joint Replacement Recovery",
              "Sports Injuries",
              "Arthritis Management",
              "Stroke Rehabilitation",
              "Workplace Injuries",
              "Chronic Pain Conditions",
              "Balance Disorders",
            ].map((specialization, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-medium">{specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance mb-6">
            Ready to Begin Your <span className="text-primary-foreground/90">Treatment</span>?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Schedule a consultation with our expert physiotherapists and take the first step towards recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Pricing Details
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
