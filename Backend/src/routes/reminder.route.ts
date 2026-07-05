import { Router } from "express";
import reminderController from "../controllers/reminder.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  reminderController.findAll
);

router.post(
  "/",
  authenticate,
  reminderController.create
);

router.patch(
  "/:id/sent",
  authenticate,
  reminderController.markSent
);

export default router;