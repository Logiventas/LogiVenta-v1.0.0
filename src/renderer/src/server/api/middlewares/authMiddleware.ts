// src/renderer/src/server/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
// deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
const JWT_SECRET = "my_super_secret_key";  // Asegúrate de usar una clave secreta segura

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error in authMiddleware:", err);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
