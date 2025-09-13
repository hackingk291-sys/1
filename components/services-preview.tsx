import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Zap, Shield, Users, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Sports Injury Recovery",
    description:
      "Specialized treatment for sports-related injuries with focus on getting you back to peak performance.",
  },
  {
    icon: Heart,
    title: "Pain Management",
    description: "Comprehensive pain relief strategies using modern techniques and personalized therapy plans.",
  },
  {
    icon: Zap,
    title: "Post-Surgery Rehabilitation",
    description: "Expert post-operative care to ensure optimal recovery and restore full functionality.",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Proactive programs designed to prevent injuries and maintain long-term physical health.",
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    description: "Specialized care for elderly patients focusing on mobility, balance, and independence.",
  },
  {
    icon: Activity,
    title: "Manual Therapy",
    description: "Hands-on treatment techniques to improve mobility and reduce pain effectively.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Comprehensive <span className="text-primary">Physiotherapy Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We offer a wide range of specialized treatments tailored to your specific needs and recovery goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-1">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group bg-transparent h-12 sm:h-auto">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
