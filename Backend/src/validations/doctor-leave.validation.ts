import { z } from "zod";

export const createDoctorLeaveSchema = z.object({
  doctorId: z.string().min(1),

  leaveDate: z.coerce.date(),

  reason: z.string().optional(),
});

export const updateDoctorLeaveSchema = z.object({
  leaveDate: z.coerce.date().optional(),

  reason: z.string().optional(),
});

export type CreateDoctorLeaveInput =
  z.infer<typeof createDoctorLeaveSchema>;

export type UpdateDoctorLeaveInput =
  z.infer<typeof updateDoctorLeaveSchema>;