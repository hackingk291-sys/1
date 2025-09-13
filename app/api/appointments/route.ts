import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, preferredDate, preferredTime, message } = body

    if (!firstName || !lastName || !email || !phone || !service || !preferredDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    const appointmentDate = new Date(preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (appointmentDate < today) {
      return NextResponse.json({ error: "Appointment date must be in the future" }, { status: 400 })
    }

    const appointmentId = `APT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    console.log("[v0] Appointment booking:", {
      appointmentId,
      firstName,
      lastName,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      message,
      status: "pending",
      timestamp: new Date().toISOString(),
    })

    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json({
      success: true,
      appointmentId,
      message:
        "Your appointment request has been submitted successfully. We will contact you within 2 hours to confirm your appointment.",
      details: {
        name: `${firstName} ${lastName}`,
        service,
        preferredDate,
        preferredTime: preferredTime || "Any time",
      },
    })
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const appointmentId = searchParams.get("id")

    if (!appointmentId) {
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 })
    }

    // For now, return mock data
    console.log("[v0] Fetching appointment:", appointmentId)

    return NextResponse.json({
      success: true,
      appointment: {
        id: appointmentId,
        status: "pending",
        message: "Your appointment is being processed. We will contact you soon.",
      },
    })
  } catch (error) {
    console.error("[v0] Appointment fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
