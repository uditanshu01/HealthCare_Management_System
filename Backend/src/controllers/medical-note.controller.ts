import { NextFunction, Request, Response } from "express";
import medicalNoteService from "../services/medical-note.service";
import { createMedicalNoteSchema } from "../validations/medical-note.validation";

class MedicalNoteController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    try {

      const body =
        createMedicalNoteSchema.parse(req.body);

      const note =
        await medicalNoteService.create(body);

      return res.status(201).json({
        success: true,
        data: note,
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

      const notes =
        await medicalNoteService.findAll();

      return res.status(200).json({
        success: true,
        data: notes,
      });

    } catch (error) {
      next(error);
    }

  }

}

export default new MedicalNoteController();
