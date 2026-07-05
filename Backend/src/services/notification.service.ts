import prisma from "../config/prisma";
import {
  NotificationStatus,
} from "@prisma/client";
import { ApiError } from "../utils/ApiError";
import { CreateNotificationInput } from "../validations/notification.validation";

class NotificationService {

  async create(data: CreateNotificationInput) {

    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return prisma.notification.create({
      data,
    });
  }

  async findAll() {
    return prisma.notification.findMany({
      include: {
        user: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async markRead(id: string) {

    return prisma.notification.update({
      where: {
        id,
      },

      data: {
        status: NotificationStatus.READ,
        readAt: new Date(),
      },
    });

  }

}

export default new NotificationService();