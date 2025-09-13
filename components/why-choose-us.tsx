import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Clock, Heart, Award, Users, Stethoscope } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Qualified Professionals",
    description: "Licensed physiotherapists with years of experience and continuous education.",
    badge: "Certified",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times that fit your busy lifestyle and commitments.",
    badge: "Available",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Individual treatment plans tailored to your specific condition and goals.",
    badge: "Custom",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful treatments and satisfied patient outcomes.",
    badge: "Effective",
  },
  {
    icon: Users,
    title: "Holistic Approach",
    description: "Comprehensive care addressing physical, mental, and lifestyle factors.",
    badge: "Complete",
  },
  {
    icon: Stethoscope,
    title: "Modern Equipment",
    description: "State-of-the-art facilities and latest physiotherapy equipment.",
    badge: "Advanced",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Why Choose <span className="text-primary">Shivam Physio Care</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We are committed to providing exceptional physiotherapy care with a patient-centered approach that delivers
            real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="space-y-2 min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h3 className="font-semibold text-base sm:text-lg">{feature.title}</h3>
                        <Badge variant="secondary" className="text-xs w-fit">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
