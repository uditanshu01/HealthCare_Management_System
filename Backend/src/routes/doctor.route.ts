import { Router } from "express";
import doctorController from "../controllers/doctor.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/rbac.middleware";

const router = Router();

/**
 * Public Routes
 */
router.get("/", doctorController.findAll);

router.get("/:id", doctorController.findById);

/**
 * Admin Routes
 */
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  doctorController.create
);

router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  doctorController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  doctorController.delete
);

export default router;