import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

export const authorize =
  (allowedRoles: UserRole[]) =>
  (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return next(
        new ApiError(401, "Authentication required.")
      );
    }

    if (!allowedRoles.includes(req.user.role as UserRole)) {
      return next(
        new ApiError(
          403,
          "You are not authorized to access this resource."
        )
      );
    }

    next();
  };
  