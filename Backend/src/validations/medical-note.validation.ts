import { z } from "zod";

export const createMedicalNoteSchema = z.object({
  appointmentId: z.string().min(1),

  doctorNotes: z.string().min(5),

  patientSummary: z.string().optional(),

  followUpInstructions: z.string().optional(),
});

export type CreateMedicalNoteInput =
  z.infer<typeof createMedicalNoteSchema>;