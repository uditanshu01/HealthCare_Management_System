import { NextFunction, Request, Response } from "express";
import specializationService from "../services/specialization.service";
import {
  createSpecializationSchema,
  updateSpecializationSchema,
} from "../validations/specialization.validation";

class SpecializationController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = createSpecializationSchema.parse(req.body);

      const specialization =
        await specializationService.create(data);

      return res.status(201).json({
        success: true,
        message: "Specialization created successfully.",
        data: specialization,
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
      const specializations =
        await specializationService.findAll();

      return res.status(200).json({
        success: true,
        data: specializations,
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
      const data = updateSpecializationSchema.parse(req.body);

      const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

      const specialization =
      await specializationService.update(
    id,
    data
  );

      return res.status(200).json({
        success: true,
        message: "Specialization updated successfully.",
        data: specialization,
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

     await specializationService.delete(id);

      return res.status(200).json({
        success: true,
        message: "Specialization deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SpecializationController();
