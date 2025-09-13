import { NextResponse } from "next/server"

const services = [
  {
    id: "sports-injury",
    name: "Sports Injury Recovery",
    description:
      "Specialized treatment for sports-related injuries with focus on getting you back to peak performance.",
    duration: "45-60 minutes",
    price: "From ₹1,500",
    category: "rehabilitation",
  },
  {
    id: "pain-management",
    name: "Pain Management",
    description: "Comprehensive pain relief strategies using modern techniques and personalized therapy plans.",
    duration: "30-45 minutes",
    price: "From ₹1,200",
    category: "treatment",
  },
  {
    id: "post-surgery",
    name: "Post-Surgery Rehabilitation",
    description: "Expert post-operative care to ensure optimal recovery and restore full functionality.",
    duration: "60 minutes",
    price: "From ₹1,800",
    category: "rehabilitation",
  },
  {
    id: "injury-prevention",
    name: "Injury Prevention",
    description: "Proactive programs designed to prevent injuries and maintain long-term physical health.",
    duration: "45 minutes",
    price: "From ₹1,000",
    category: "prevention",
  },
  {
    id: "geriatric",
    name: "Geriatric Physiotherapy",
    description: "Specialized care for elderly patients focusing on mobility, balance, and independence.",
    duration: "45 minutes",
    price: "From ₹1,300",
    category: "specialized",
  },
  {
    id: "manual-therapy",
    name: "Manual Therapy",
    description: "Hands-on treatment techniques to improve mobility and reduce pain effectively.",
    duration: "30-45 minutes",
    price: "From ₹1,400",
    category: "treatment",
  },
  {
    id: "neurological",
    name: "Neurological Rehabilitation",
    description: "Specialized treatment for neurological conditions and recovery.",
    duration: "60 minutes",
    price: "From ₹2,000",
    category: "specialized",
  },
  {
    id: "strength-conditioning",
    name: "Strength & Conditioning",
    description: "Fitness and strength training programs for optimal physical performance.",
    duration: "45-60 minutes",
    price: "From ₹1,100",
    category: "fitness",
  },
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      services,
      categories: ["rehabilitation", "treatment", "prevention", "specialized", "fitness"],
    })
  } catch (error) {
    console.error("[v0] Services fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
