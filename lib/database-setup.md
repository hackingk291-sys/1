# Database Integration Setup

This project includes database schema and utility functions that can be used with various database providers.

## Supported Integrations

- **Supabase** - PostgreSQL with real-time features
- **Neon** - Serverless PostgreSQL
- **PlanetScale** - MySQL-compatible serverless database

## Setup Instructions

### 1. Add Database Integration

1. Go to Project Settings in the v0 interface
2. Navigate to Integrations
3. Add your preferred database integration (Supabase, Neon, etc.)

### 2. Run Database Scripts

Once your database integration is connected, run the SQL scripts in order:

1. `scripts/01-create-tables.sql` - Creates the database schema
2. `scripts/02-seed-services.sql` - Adds initial service data
3. `scripts/03-seed-availability.sql` - Creates availability slots for the next 30 days

### 3. Update Database Service

After connecting your database, update the `lib/database.ts` file to implement the actual database operations using your chosen provider's SDK.

## Database Schema

### Tables

- **contacts** - Contact form submissions
- **appointments** - Appointment bookings
- **services** - Available physiotherapy services
- **availability** - Time slot availability management

### Key Features

- Automatic timestamps for all records
- Proper indexing for performance
- Unique constraints to prevent duplicates
- Status tracking for appointments and contacts
- Flexible availability management

## Environment Variables

Make sure to set the appropriate environment variables for your database integration:

- **Supabase**: `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- **Neon**: `DATABASE_URL`
- **PlanetScale**: `DATABASE_URL`

## Usage

\`\`\`typescript
import { db } from '@/lib/database'

// Create a contact
const contact = await db.createContact({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  message: 'I need help with back pain',
  consent: true
})

// Create an appointment
const appointment = await db.createAppointment({
  appointmentId: 'APT-123',
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane@example.com',
  phone: '+1234567890',
  service: 'pain-management',
  preferredDate: '2024-01-15',
  preferredTime: '10:00'
})
