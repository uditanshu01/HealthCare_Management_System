import { Router } from "express";
import workingHourController from "../controllers/working-hour.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/rbac.middleware";

const router = Router();

router.get("/:doctorId", workingHourController.findByDoctor);

router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  workingHourController.create
);

router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  workingHourController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  workingHourController.delete
);

export default router;