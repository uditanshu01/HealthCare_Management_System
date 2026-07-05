import { z } from "zod";

export const createNotificationSchema = z.object({
  userId: z.string().min(1),

  title: z.string().min(1),

  message: z.string().min(1),

  type: z.enum([
    "BOOKING_CONFIRMATION",
    "APPOINTMENT_REMINDER",
    "APPOINTMENT_CANCELLED",
    "DOCTOR_LEAVE",
    "MEDICATION_REMINDER",
    "GENERAL",
  ]),
});

export type CreateNotificationInput =
  z.infer<typeof createNotificationSchema>;