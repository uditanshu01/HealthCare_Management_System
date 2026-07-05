import { z } from "zod";

export const createWorkingHourSchema = z.object({
  doctorId: z.string().min(1, "Doctor ID is required"),

  dayOfWeek: z.number().min(0).max(6),

  startTime: z.string().min(1),

  endTime: z.string().min(1),

  slotDuration: z.number().int().positive(),
});

export const updateWorkingHourSchema = z.object({
  dayOfWeek: z.number().min(0).max(6).optional(),

  startTime: z.string().optional(),

  endTime: z.string().optional(),

  slotDuration: z.number().int().positive().optional(),
});

export type CreateWorkingHourInput =
  z.infer<typeof createWorkingHourSchema>;

export type UpdateWorkingHourInput =
  z.infer<typeof updateWorkingHourSchema>;