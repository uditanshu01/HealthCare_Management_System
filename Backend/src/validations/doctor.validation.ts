import { z } from "zod";

export const createDoctorSchema = z.object({
  userId: z.string().min(1, "User ID is required"),

  specializationId: z.string().min(1, "Specialization is required"),

  qualification: z.string().optional(),

  experience: z
    .number()
    .int()
    .min(0)
    .optional(),

  consultationFee: z
    .number()
    .positive()
    .optional(),
});

export const updateDoctorSchema = z.object({
  specializationId: z.string().optional(),

  qualification: z.string().optional(),

  experience: z
    .number()
    .int()
    .min(0)
    .optional(),

  consultationFee: z
    .number()
    .positive()
    .optional(),
});

export type CreateDoctorInput =
  z.infer<typeof createDoctorSchema>;

export type UpdateDoctorInput =
  z.infer<typeof updateDoctorSchema>;