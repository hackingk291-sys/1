export interface Contact {
  id?: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  service?: string
  message: string
  consent: boolean
  status?: "new" | "contacted" | "resolved"
  createdAt?: Date
  updatedAt?: Date
}

export interface Appointment {
  id?: number
  appointmentId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  message?: string
  status?: "pending" | "confirmed" | "cancelled" | "completed"
  createdAt?: Date
  updatedAt?: Date
  confirmedAt?: Date
  cancelledAt?: Date
}

export interface Service {
  id?: number
  serviceId: string
  name: string
  description?: string
  durationMin?: number
  durationMax?: number
  priceFrom?: number
  category?: string
  active?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface AvailabilitySlot {
  id?: number
  date: string
  timeSlot: string
  available: boolean
  maxAppointments?: number
  currentAppointments?: number
  createdAt?: Date
  updatedAt?: Date
}

// Database connection utility (to be implemented when database is connected)
export class DatabaseService {
  private static instance: DatabaseService
  private connection: any = null

  private constructor() {}

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  // Initialize database connection (implement when database integration is added)
  async connect() {
    // TODO: Implement database connection based on available integration
    // This could be Supabase, Neon, or other supported databases
    console.log("[v0] Database connection not yet configured. Please add a database integration.")
  }

  // Contact methods
  async createContact(contact: Omit<Contact, "id" | "createdAt" | "updatedAt">): Promise<Contact> {
    // TODO: Implement when database is connected
    console.log("[v0] Creating contact:", contact)
    return { ...contact, id: Date.now(), createdAt: new Date(), updatedAt: new Date() }
  }

  async getContacts(limit = 50, offset = 0): Promise<Contact[]> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching contacts")
    return []
  }

  async updateContactStatus(id: number, status: Contact["status"]): Promise<void> {
    // TODO: Implement when database is connected
    console.log("[v0] Updating contact status:", id, status)
  }

  // Appointment methods
  async createAppointment(appointment: Omit<Appointment, "id" | "createdAt" | "updatedAt">): Promise<Appointment> {
    // TODO: Implement when database is connected
    console.log("[v0] Creating appointment:", appointment)
    return { ...appointment, id: Date.now(), createdAt: new Date(), updatedAt: new Date() }
  }

  async getAppointment(appointmentId: string): Promise<Appointment | null> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching appointment:", appointmentId)
    return null
  }

  async getAppointments(date?: string, status?: Appointment["status"]): Promise<Appointment[]> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching appointments for date:", date, "status:", status)
    return []
  }

  async updateAppointmentStatus(appointmentId: string, status: Appointment["status"]): Promise<void> {
    // TODO: Implement when database is connected
    console.log("[v0] Updating appointment status:", appointmentId, status)
  }

  // Service methods
  async getServices(active = true): Promise<Service[]> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching services, active:", active)
    return []
  }

  async getService(serviceId: string): Promise<Service | null> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching service:", serviceId)
    return null
  }

  // Availability methods
  async getAvailability(date: string): Promise<AvailabilitySlot[]> {
    // TODO: Implement when database is connected
    console.log("[v0] Fetching availability for date:", date)
    return []
  }

  async updateAvailability(date: string, timeSlot: string, available: boolean): Promise<void> {
    // TODO: Implement when database is connected
    console.log("[v0] Updating availability:", date, timeSlot, available)
  }

  async bookTimeSlot(date: string, timeSlot: string): Promise<boolean> {
    // TODO: Implement when database is connected
    console.log("[v0] Booking time slot:", date, timeSlot)
    return true
  }

  async releaseTimeSlot(date: string, timeSlot: string): Promise<void> {
    // TODO: Implement when database is connected
    console.log("[v0] Releasing time slot:", date, timeSlot)
  }
}

// Export singleton instance
export const db = DatabaseService.getInstance()
