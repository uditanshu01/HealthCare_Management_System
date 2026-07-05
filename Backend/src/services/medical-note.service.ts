import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import { CreateMedicalNoteInput } from "../validations/medical-note.validation";

class MedicalNoteService {

  async create(data: CreateMedicalNoteInput) {

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

    return prisma.medicalNote.create({
      data,
    });

  }

  async findAll() {

    return prisma.medicalNote.findMany({

      include: {
        appointment: true,
      },

    });

  }

}

export default new MedicalNoteService();