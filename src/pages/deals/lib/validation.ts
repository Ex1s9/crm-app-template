import { z } from "zod";

export const dealSchema = z.object({
  customer: z.coerce.number().min(1, "Customer ID is required"),
  address_city: z.string().min(1, "City is required"),
  address_state: z.string().min(1, "State is required"),
  address_street: z.string().optional(),
  address_zip_code: z.string().min(1, "ZIP code is required"),
  room_area: z.coerce.number().min(1, "Room area must be positive"),
  number_of_people: z.coerce.number().min(1, "At least 1 person required"),
  appointment_date: z.string().min(1, "Appointment date is required"),
  special_instructions: z.string().optional(),
  room_access: z.enum(["keys_with_doorman", "fingerprint"]),
  price: z.coerce.number().min(0, "Price must be non-negative"),
  progress: z.enum(["in_progress", "closed"]),
});

export type DealFormData = z.infer<typeof dealSchema>;
