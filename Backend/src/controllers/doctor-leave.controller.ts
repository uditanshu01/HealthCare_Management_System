import { NextFunction, Request, Response } from "express";
import doctorLeaveService from "../services/doctor-leave.service";
import {
  createDoctorLeaveSchema,
  updateDoctorLeaveSchema,
} from "../validations/doctor-leave.validation";

class DoctorLeaveController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = createDoctorLeaveSchema.parse(req.body);

      const leave = await doctorLeaveService.create(data);

      return res.status(201).json({
        success: true,
        data: leave,
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
      const leaves = await doctorLeaveService.findAll();

      return res.status(200).json({
        success: true,
        data: leaves,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = updateDoctorLeaveSchema.parse(req.body);

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const leave = await doctorLeaveService.update(
        id,
        data
      );

      return res.status(200).json({
        success: true,
        data: leave,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      await doctorLeaveService.delete(id);

      return res.status(200).json({
        success: true,
        message: "Doctor leave deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new DoctorLeaveController();