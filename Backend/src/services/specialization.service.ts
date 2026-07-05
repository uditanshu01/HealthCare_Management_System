import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";
import {
  CreateSpecializationInput,
  UpdateSpecializationInput,
} from "../validations/specialization.validation";

class SpecializationService {
  /**
   * Create a specialization
   */
  async create(data: CreateSpecializationInput) {
    const existing = await prisma.specialization.findUnique({
      where: {
        name: data.name,
      },
    });

    if (existing) {
      throw new ApiError(
        409,
        "Specialization already exists."
      );
    }

    return prisma.specialization.create({
      data,
    });
  }

  /**
   * Get all specializations
   */
  async findAll() {
    return prisma.specialization.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }

  /**
   * Update specialization
   */
  async update(
    id: string,
    data: UpdateSpecializationInput
  ) {
    const specialization =
      await prisma.specialization.findUnique({
        where: { id },
      });

    if (!specialization) {
      throw new ApiError(
        404,
        "Specialization not found."
      );
    }

    return prisma.specialization.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete specialization
   */
  async delete(id: string) {
    const specialization =
      await prisma.specialization.findUnique({
        where: { id },
      });

    if (!specialization) {
      throw new ApiError(
        404,
        "Specialization not found."
      );
    }

    return prisma.specialization.delete({
      where: { id },
    });
  }
}

export default new SpecializationService();