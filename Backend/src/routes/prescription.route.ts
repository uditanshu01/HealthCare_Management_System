import { Router } from "express";
import prescriptionController from "../controllers/prescription.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  prescriptionController.findAll
);

router.post(
  "/",
  authenticate,
  prescriptionController.create
);

export default router;