import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import { CreatePrescriptionInput } from "../validations/prescription.validation";

class PrescriptionService {

  async create(data: CreatePrescriptionInput) {

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

    return prisma.prescription.create({
      data,
    });

  }

  async findAll() {

    return prisma.prescription.findMany({

      include: {
        appointment: true,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  }

}

export default new PrescriptionService();
