import { z } from "zod";

export const createPrescriptionSchema = z.object({
  appointmentId: z.string().min(1),

  medicineName: z.string().min(1),

  dosage: z.string().min(1),

  frequency: z.string().min(1),

  durationDays: z.number().int().positive(),

  instructions: z.string().optional(),
});

export type CreatePrescriptionInput =
  z.infer<typeof createPrescriptionSchema>;