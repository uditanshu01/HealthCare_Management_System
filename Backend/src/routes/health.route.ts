import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Healthcare Appointment API is running",
    timestamp: new Date(),
  });
});

export default router;