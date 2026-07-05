import { z } from "zod";

export const createReminderSchema = z.object({
  appointmentId: z.string().min(1),

  prescriptionId: z.string().min(1),

  reminderTime: z.coerce.date(),
});

export type CreateReminderInput =
  z.infer<typeof createReminderSchema>;