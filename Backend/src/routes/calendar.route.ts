import { Router } from "express";
import calendarController from "../controllers/calendar.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  calendarController.findAll
);

router.post(
  "/",
  authenticate,
  calendarController.create
);

router.patch(
  "/:id/sync",
  authenticate,
  calendarController.markSynced
);

export default router;
