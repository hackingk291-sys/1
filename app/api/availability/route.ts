import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
    }

    const requestedDate = new Date(date)
    if (isNaN(requestedDate.getTime())) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 })
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (requestedDate < today) {
      return NextResponse.json({
        success: true,
        date,
        available: false,
        message: "Cannot book appointments for past dates",
        timeSlots: [],
      })
    }

    const dayOfWeek = requestedDate.getDay()
    if (dayOfWeek === 0) {
      return NextResponse.json({
        success: true,
        date,
        available: false,
        message: "Clinic is closed on Sundays",
        timeSlots: [],
      })
    }

    const timeSlots = []
    const isWeekend = dayOfWeek === 6 // Saturday

    // Weekday hours: 9 AM - 7 PM, Weekend: 9 AM - 5 PM
    const startHour = 9
    const endHour = isWeekend ? 17 : 19

    for (let hour = startHour; hour < endHour; hour++) {
      // Skip lunch break (1-2 PM)
      if (hour === 13) continue

      // Generate 30-minute slots
      for (const minutes of [0, 30]) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
        const displayTime = new Date(2024, 0, 1, hour, minutes).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })

        const isAvailable = Math.random() > 0.3

        timeSlots.push({
          time: timeString,
          displayTime,
          available: isAvailable,
        })
      }
    }

    console.log("[v0] Availability check for:", date, "Slots:", timeSlots.length)

    return NextResponse.json({
      success: true,
      date,
      available: true,
      timeSlots,
      message: `${timeSlots.filter((slot) => slot.available).length} slots available`,
    })
  } catch (error) {
    console.error("[v0] Availability check error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
