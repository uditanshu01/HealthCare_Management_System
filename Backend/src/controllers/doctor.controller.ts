import { NextFunction, Request, Response } from "express";
import doctorService from "../services/doctor.service";
import {
  createDoctorSchema,
  updateDoctorSchema,
} from "../validations/doctor.validation";

class DoctorController {
  /**
   * Create Doctor
   */
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = createDoctorSchema.parse(req.body);

      const doctor = await doctorService.create(data);

      return res.status(201).json({
        success: true,
        message: "Doctor created successfully.",
        data: doctor,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Doctors
   */
  async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doctors = await doctorService.findAll();

      return res.status(200).json({
        success: true,
        data: doctors,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Doctor By ID
   */
  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const doctor = await doctorService.findById(id);

      return res.status(200).json({
        success: true,
        data: doctor,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Doctor
   */
  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = updateDoctorSchema.parse(req.body);

      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      const doctor = await doctorService.update(
        id,
        data
      );

      return res.status(200).json({
        success: true,
        message: "Doctor updated successfully.",
        data: doctor,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Doctor
   */
  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      await doctorService.delete(id);

      return res.status(200).json({
        success: true,
        message: "Doctor deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new DoctorController();