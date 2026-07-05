import { Router } from "express";
import symptomController from "../controllers/symptom.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  symptomController.findAll
);

router.post(
  "/",
  authenticate,
  symptomController.create
);

export default router;
