import { NextFunction, Request, Response } from "express";
import notificationService from "../services/notification.service";
import { createNotificationSchema } from "../validations/notification.validation";

class NotificationController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      const body =
        createNotificationSchema.parse(req.body);

      const notification =
        await notificationService.create(body);

      return res.status(201).json({
        success: true,
        data: notification,
      });

    } catch (error) {
      next(error);
    }
  }

  async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      const notifications =
        await notificationService.findAll();

      return res.status(200).json({
        success: true,
        data: notifications,
      });

    } catch (error) {
      next(error);
    }
  }

  async markRead(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const notification =
        await notificationService.markRead(id);

      return res.status(200).json({
        success: true,
        data: notification,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new NotificationController();