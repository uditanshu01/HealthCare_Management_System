import { Router } from "express";
import doctorLeaveController from "../controllers/doctor-leave.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/rbac.middleware";

const router = Router();

/**
 * Public Route
 */
router.get("/", doctorLeaveController.findAll);

/**
 * Admin Routes
 */
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  doctorLeaveController.create
);

router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  doctorLeaveController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  doctorLeaveController.delete
);

export default router;