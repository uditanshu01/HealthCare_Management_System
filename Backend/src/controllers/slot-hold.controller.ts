import { NextFunction, Request, Response } from "express";
import slotHoldService from "../services/slot-hold.service";

class SlotHoldController {
  async hold(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { doctorId, patientId, slotStart } = req.body;

      const hold = await slotHoldService.holdSlot(
        doctorId,
        patientId,
        new Date(slotStart)
      );

      return res.status(201).json({
        success: true,
        message: "Slot held successfully.",
        data: hold,
      });
    } catch (error) {
      next(error);
    }
  }

  async release(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      await slotHoldService.releaseSlot(id);

      return res.status(200).json({
        success: true,
        message: "Slot released successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SlotHoldController();
