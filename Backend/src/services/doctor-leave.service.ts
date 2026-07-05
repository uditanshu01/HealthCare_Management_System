import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import {
  CreateDoctorLeaveInput,
  UpdateDoctorLeaveInput,
} from "../validations/doctor-leave.validation";

class DoctorLeaveService {
  async create(data: CreateDoctorLeaveInput) {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: data.doctorId,
      },
    });

    if (!doctor) {
      throw new ApiError(404, "Doctor not found.");
    }

    return prisma.doctorLeave.create({
      data,
    });
  }

  async findAll() {
    return prisma.doctorLeave.findMany({
      include: {
        doctor: true,
      },
    });
  }

  async update(
    id: string,
    data: UpdateDoctorLeaveInput
  ) {
    return prisma.doctorLeave.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.doctorLeave.delete({
      where: { id },
    });
  }
}

export default new DoctorLeaveService();
