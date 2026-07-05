import { NextFunction, Request, Response } from "express";
import appointmentService from "../services/appointment.service";
import {
  createAppointmentSchema,
  rescheduleAppointmentSchema,
} from "../validations/appointment.validation";

class AppointmentController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = createAppointmentSchema.parse(req.body);

      const appointment =
        await appointmentService.create(data);

      return res.status(201).json({
        success: true,
        message: "Appointment booked successfully.",
        data: appointment,
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
      const appointments =
        await appointmentService.findAll();

      return res.status(200).json({
        success: true,
        data: appointments,
      });
    } catch (error) {
      next(error);
    }
  }

  async findByPatient(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const patientId = Array.isArray(req.params.patientId)
        ? req.params.patientId[0]
        : req.params.patientId;

      const appointments =
        await appointmentService.findByPatient(patientId);

      return res.status(200).json({
        success: true,
        data: appointments,
      });
    } catch (error) {
      next(error);
    }
  }

  async cancel(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const appointment =
        await appointmentService.cancel(id);

      return res.status(200).json({
        success: true,
        message: "Appointment cancelled successfully.",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  }

  async reschedule(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const data =
        rescheduleAppointmentSchema.parse(req.body);

      const appointment =
        await appointmentService.reschedule(
          id,
          data
        );

      return res.status(200).json({
        success: true,
        message:
          "Appointment rescheduled successfully.",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AppointmentController();