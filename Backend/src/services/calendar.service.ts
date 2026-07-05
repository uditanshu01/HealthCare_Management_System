import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import { CalendarEventStatus } from "@prisma/client";
import { CreateCalendarEventInput } from "../validations/calendar.validation";

class CalendarService {

  async create(data: CreateCalendarEventInput) {

    const appointment =
      await prisma.appointment.findUnique({
        where: {
          id: data.appointmentId,
        },
      });

    if (!appointment) {
      throw new ApiError(
        404,
        "Appointment not found."
      );
    }

    return prisma.calendarEvent.create({
      data: {
        appointmentId: data.appointmentId,
        googleEventId: data.googleEventId,
      },
    });

  }

  async findAll() {

    return prisma.calendarEvent.findMany({

      include: {
        appointment: true,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  }

  async markSynced(id: string) {

    return prisma.calendarEvent.update({

      where: {
        id,
      },

      data: {
        status: CalendarEventStatus.UPDATED,
        lastSyncedAt: new Date(),
      },

    });

  }

}

export default new CalendarService();