import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { error } from "console";

export const errorHandler = (
  
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};