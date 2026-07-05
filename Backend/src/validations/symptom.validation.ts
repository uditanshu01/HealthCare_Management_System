import { z } from "zod";

export const createSymptomSchema = z.object({
  appointmentId: z.string().min(1),

  symptoms: z.string().min(5),

  urgency: z
    .enum(["LOW", "MEDIUM", "HIGH"])
    .optional(),

  chiefComplaint: z.string().optional(),
});

export type CreateSymptomInput =
  z.infer<typeof createSymptomSchema>;