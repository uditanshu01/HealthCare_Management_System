import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import { CreateReminderInput } from "../validations/reminder.validation";

class ReminderService {

  async create(data: CreateReminderInput) {

    const prescription =
      await prisma.prescription.findUnique({
        where: {
          id: data.prescriptionId,
        },
      });

    if (!prescription) {
      throw new ApiError(
        404,
        "Prescription not found."
      );
    }

    return prisma.medicationReminder.create({
      data,
    });

  }

  async findAll() {

    return prisma.medicationReminder.findMany({

      include: {
        prescription: true,
        appointment: true,
      },

      orderBy: {
        reminderTime: "asc",
      },

    });

  }

  async markSent(id: string) {

    return prisma.medicationReminder.update({
      where: {
        id,
      },

      data: {
        isSent: true,
      },

    });

  }

}

export default new ReminderService();