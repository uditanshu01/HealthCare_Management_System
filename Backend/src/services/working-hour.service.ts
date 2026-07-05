import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import {
  CreateWorkingHourInput,
  UpdateWorkingHourInput,
} from "../validations/working-hour.validation";

class WorkingHourService {
  async create(data: CreateWorkingHourInput) {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: data.doctorId,
      },
    });

    if (!doctor) {
      throw new ApiError(404, "Doctor not found.");
    }

    return prisma.doctorWorkingHour.create({
      data,
    });
  }

  async findByDoctor(doctorId: string) {
    return prisma.doctorWorkingHour.findMany({
      where: {
        doctorId,
      },
      orderBy: {
        dayOfWeek: "asc",
      },
    });
  }

  async update(
    id: string,
    data: UpdateWorkingHourInput
  ) {
    const hour =
      await prisma.doctorWorkingHour.findUnique({
        where: { id },
      });

    if (!hour) {
      throw new ApiError(
        404,
        "Working hour not found."
      );
    }

    return prisma.doctorWorkingHour.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const hour =
      await prisma.doctorWorkingHour.findUnique({
        where: { id },
      });

    if (!hour) {
      throw new ApiError(
        404,
        "Working hour not found."
      );
    }

    return prisma.doctorWorkingHour.delete({
      where: { id },
    });
  }
}

export default new WorkingHourService();