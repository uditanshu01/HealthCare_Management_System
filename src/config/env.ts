import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: Number(process.env.PORT) || 5000,

  DATABASE_URL: process.env.DATABASE_URL!,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "",

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",

  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",

  NODE_ENV: process.env.NODE_ENV || "development",
};

export default env;