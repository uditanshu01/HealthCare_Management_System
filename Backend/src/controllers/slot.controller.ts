import { NextFunction, Request, Response } from "express";
import slotService from "../services/slot.service";

class SlotController {
  async getSlots(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const doctorId = Array.isArray(req.params.doctorId)
        ? req.params.doctorId[0]
        : req.params.doctorId;

      const dateQuery = String(req.query.date);

      if (!dateQuery) {
        return res.status(400).json({
          success: false,
          message: "Date query parameter is required.",
        });
      }

      const slots = await slotService.generateSlots(
        doctorId,
        new Date(dateQuery)
      );

      return res.status(200).json({
        success: true,
        data: slots,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SlotController();