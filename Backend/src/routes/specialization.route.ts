import { Router } from "express";
import specializationController from "../controllers/specialization.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/rbac.middleware";

const router = Router();

// Public
router.get("/", specializationController.findAll);

// Admin only
router.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  specializationController.create
);

router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  specializationController.update
);

router.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  specializationController.delete
);

export default router;