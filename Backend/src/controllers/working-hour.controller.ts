import { NextFunction, Request, Response } from "express";
import workingHourService from "../services/working-hour.service";
import {
  createWorkingHourSchema,
  updateWorkingHourSchema,
} from "../validations/working-hour.validation";

class WorkingHourController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createWorkingHourSchema.parse(req.body);

      const hour = await workingHourService.create(data);

      return res.status(201).json({
        success: true,
        data: hour,
      });
    } catch (error) {
      next(error);
    }
  }

  async findByDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const doctorId = Array.isArray(req.params.doctorId)
        ? req.params.doctorId[0]
        : req.params.doctorId;

      const data = await workingHourService.findByDoctor(doctorId);

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const body = updateWorkingHourSchema.parse(req.body);

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const data = await workingHourService.update(id, body);

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      await workingHourService.delete(id);

      return res.status(200).json({
        success: true,
        message: "Working hour deleted.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new WorkingHourController();