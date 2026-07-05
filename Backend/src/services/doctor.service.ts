import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import {
  CreateDoctorInput,
  UpdateDoctorInput,
} from "../validations/doctor.validation";

class DoctorService {
  /**
   * Create Doctor
   */
  async create(data: CreateDoctorInput) {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    // Only users with the DOCTOR role can have a doctor profile
    if (user.role !== "DOCTOR") {
      throw new ApiError(
        400,
        "Selected user is not a doctor."
      );
    }

    // Prevent duplicate doctor profiles
    const existingDoctor = await prisma.doctor.findUnique({
      where: {
        userId: data.userId,
      },
    });

    if (existingDoctor) {
      throw new ApiError(
        409,
        "Doctor profile already exists."
      );
    }

    // Ensure specialization exists
    const specialization =
      await prisma.specialization.findUnique({
        where: {
          id: data.specializationId,
        },
      });

    if (!specialization) {
      throw new ApiError(
        404,
        "Specialization not found."
      );
    }

    return prisma.doctor.create({
      data,
      include: {
        user: true,
        specialization: true,
      },
    });
  }

  /**
   * Get All Doctors
   */
  async findAll() {
    return prisma.doctor.findMany({
      include: {
        user: true,
        specialization: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Get Doctor By ID
   */
  async findById(id: string) {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
      include: {
        user: true,
        specialization: true,
      },
    });

    if (!doctor) {
      throw new ApiError(404, "Doctor not found.");
    }

    return doctor;
  }

  /**
   * Update Doctor
   */
  async update(
    id: string,
    data: UpdateDoctorInput
  ) {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    });

    if (!doctor) {
      throw new ApiError(404, "Doctor not found.");
    }

    return prisma.doctor.update({
      where: { id },
      data,
      include: {
        user: true,
        specialization: true,
      },
    });
  }

  /**
   * Delete Doctor
   */
  async delete(id: string) {
    const doctor = await prisma.doctor.findUnique({
      where: { id },
    });

    if (!doctor) {
      throw new ApiError(404, "Doctor not found.");
    }

    return prisma.doctor.delete({
      where: { id },
    });
  }
}

export default new DoctorService();