import { NextFunction, Request, Response } from "express";
import symptomService from "../services/symptom.service";
import { createSymptomSchema } from "../validations/symptom.validation";

class SymptomController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body =
        createSymptomSchema.parse(req.body);

      const symptom =
        await symptomService.create(body);

      return res.status(201).json({
        success: true,
        data: symptom,
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

      const symptoms =
        await symptomService.findAll();

      return res.status(200).json({
        success: true,
        data: symptoms,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new SymptomController();