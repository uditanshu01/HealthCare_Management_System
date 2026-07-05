import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";

class SlotHoldService {
  async holdSlot(
    doctorId: string,
    patientId: string,
    slotStart: Date
  ) {
    const expiresAt = new Date();

    expiresAt.setMinutes(
      expiresAt.getMinutes() + 5
    );

    const existing =
      await prisma.slotHold.findFirst({
        where: {
          doctorId,
          slotStart,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

    if (existing) {
      throw new ApiError(
        400,
        "Slot already held."
      );
    }

    return prisma.slotHold.create({
      data: {
        doctorId,
        patientId,
        slotStart,
        expiresAt,
      },
    });
  }

  async releaseSlot(id: string) {
    return prisma.slotHold.delete({
      where: {
        id,
      },
    });
  }
}

export default new SlotHoldService();