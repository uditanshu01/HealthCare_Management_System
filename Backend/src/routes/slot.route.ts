import { Router } from "express";
import slotController from "../controllers/slot.controller";

const router = Router();

router.get(
  "/:doctorId",
  slotController.getSlots
);

export default router;