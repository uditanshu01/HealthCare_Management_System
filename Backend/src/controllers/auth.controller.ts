import { Request, Response, NextFunction } from "express";
import authService from "../services/auth.service";
import {
  loginSchema,
  registerSchema,
} from "../validations/auth.validation";

class AuthController {
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = registerSchema.parse(req.body);

      const user = await authService.register(data);

      return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = loginSchema.parse(req.body);

      const result = await authService.login(data);

      return res.status(200).json({
        success: true,
        message: "Login successful.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async me(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await authService.getCurrentUser(
      req.user!.id
    );

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
}

export default new AuthController();