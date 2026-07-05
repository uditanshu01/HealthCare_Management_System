import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import { CreateSymptomInput } from "../validations/symptom.validation";

class SymptomService {

  async create(data: CreateSymptomInput) {

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

    return prisma.symptom.create({
      data,
    });

  }

  async findAll() {

    return prisma.symptom.findMany({

      include: {
        appointment: true,
      },

    });

  }

}

export default new SymptomService();