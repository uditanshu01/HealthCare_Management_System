import { NextFunction, Request, Response } from "express";
import calendarService from "../services/calendar.service";
import { createCalendarEventSchema } from "../validations/calendar.validation";

class CalendarController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body =
        createCalendarEventSchema.parse(req.body);

      const event =
        await calendarService.create(body);

      return res.status(201).json({
        success: true,
        data: event,
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

      const events =
        await calendarService.findAll();

      return res.status(200).json({
        success: true,
        data: events,
      });

    } catch (error) {
      next(error);
    }

  }

  async markSynced(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const event =
        await calendarService.markSynced(id);

      return res.status(200).json({
        success: true,
        data: event,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new CalendarController();
