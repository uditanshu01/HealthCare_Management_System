import { NextFunction, Request, Response } from "express";
import prescriptionService from "../services/prescription.service";
import { createPrescriptionSchema } from "../validations/prescription.validation";

class PrescriptionController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body =
        createPrescriptionSchema.parse(req.body);

      const prescription =
        await prescriptionService.create(body);

      return res.status(201).json({
        success: true,
        data: prescription,
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

      const prescriptions =
        await prescriptionService.findAll();

      return res.status(200).json({
        success: true,
        data: prescriptions,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new PrescriptionController();