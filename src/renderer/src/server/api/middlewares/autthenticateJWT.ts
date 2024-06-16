// src/renderer/src/server/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
// deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
const JWT_SECRET = process.env.JWT_SECRET || "my_super_secret_key";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access token is missing or invalid" });
  }

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.user = jwt.decode(token);
    next();
  });
};