import { Router } from "express";
import appointmentController from "../controllers/appointment.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

/**
 * Get all appointments
 */
router.get(
  "/",
  authenticate,
  appointmentController.findAll
);

/**
 * Get appointments of a patient
 */
router.get(
  "/patient/:patientId",
  authenticate,
  appointmentController.findByPatient
);

/**
 * Book an appointment
 */
router.post(
  "/",
  authenticate,
  appointmentController.create
);

/**
 * Cancel an appointment
 */
router.patch(
  "/:id/cancel",
  authenticate,
  appointmentController.cancel
);

/**
 * Reschedule an appointment
 */
router.patch(
  "/:id/reschedule",
  authenticate,
  appointmentController.reschedule
);

export default router;