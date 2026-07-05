import { Router } from "express";
import slotHoldController from "../controllers/slot-hold.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  slotHoldController.hold
);

router.delete(
  "/:id",
  authenticate,
  slotHoldController.release
);

export default router;
