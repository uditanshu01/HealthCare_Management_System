import { z } from "zod";

export const createAppointmentSchema = z.object({
  doctorId: z.string().min(1),
  patientId: z.string().min(1),

  appointmentStart: z.coerce.date(),
  appointmentEnd: z.coerce.date(),
});

export const rescheduleAppointmentSchema = z.object({
  appointmentStart: z.coerce.date(),
  appointmentEnd: z.coerce.date(),
});

export type CreateAppointmentInput =
  z.infer<typeof createAppointmentSchema>;

export type RescheduleAppointmentInput =
  z.infer<typeof rescheduleAppointmentSchema>;