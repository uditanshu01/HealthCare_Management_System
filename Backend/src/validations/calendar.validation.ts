import { z } from "zod";

export const createCalendarEventSchema = z.object({
  appointmentId: z.string().min(1),

  googleEventId: z.string().optional(),
});

export type CreateCalendarEventInput =
  z.infer<typeof createCalendarEventSchema>;