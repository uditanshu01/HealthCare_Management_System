import { Router } from "express";
import notificationController from "../controllers/notification.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  notificationController.findAll
);

router.post(
  "/",
  authenticate,
  notificationController.create
);

router.patch(
  "/:id/read",
  authenticate,
  notificationController.markRead
);

export default router;