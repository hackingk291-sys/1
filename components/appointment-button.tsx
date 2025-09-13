"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

interface AppointmentButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function AppointmentButton({
  variant = "default",
  size = "default",
  className = "",
  children,
}: AppointmentButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push("/book-appointment")
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`bg-primary hover:bg-primary/90 ${className}`}
      onClick={handleClick}
    >
      <Calendar className="w-4 h-4 mr-2" />
      {children || "Book Appointment"}
    </Button>
  )
}
