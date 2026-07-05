import { z } from "zod";

export const createSpecializationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100),

  description: z
    .string()
    .max(500)
    .optional(),
});

export const updateSpecializationSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .optional(),

  description: z
    .string()
    .max(500)
    .optional(),
});

export type CreateSpecializationInput =
  z.infer<typeof createSpecializationSchema>;

export type UpdateSpecializationInput =
  z.infer<typeof updateSpecializationSchema>;