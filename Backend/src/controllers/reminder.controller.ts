import { NextFunction, Request, Response } from "express";
import reminderService from "../services/reminder.service";
import { createReminderSchema } from "../validations/reminder.validation";

class ReminderController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body =
        createReminderSchema.parse(req.body);

      const reminder =
        await reminderService.create(body);

      return res.status(201).json({
        success: true,
        data: reminder,
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

      const reminders =
        await reminderService.findAll();

      return res.status(200).json({
        success: true,
        data: reminders,
      });

    } catch (error) {
      next(error);
    }

  }

  async markSent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const reminder =
        await reminderService.markSent(id);

      return res.status(200).json({
        success: true,
        data: reminder,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new ReminderController();