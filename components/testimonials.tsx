import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    condition: "Back Pain Recovery",
    rating: 5,
    text: "The team at Shivam Physio Care helped me recover from chronic back pain that I had been dealing with for years. Their personalized approach and dedication made all the difference.",
  },
  {
    name: "Rajesh Kumar",
    condition: "Sports Injury",
    rating: 5,
    text: "After my knee injury, I thought my cricket days were over. Thanks to the expert care here, I am back on the field stronger than ever. Highly recommend their sports rehabilitation program.",
  },
  {
    name: "Anita Patel",
    condition: "Post-Surgery Care",
    rating: 5,
    text: "The post-operative physiotherapy I received was exceptional. The staff was professional, caring, and helped me regain full mobility much faster than expected.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Real stories from real patients who have experienced the difference our care makes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>

                  {/* Patient info */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
