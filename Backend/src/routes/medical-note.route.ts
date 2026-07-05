import { Router } from "express";
import medicalNoteController from "../controllers/medical-note.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  medicalNoteController.findAll
);

router.post(
  "/",
  authenticate,
  medicalNoteController.create
);

export default router;