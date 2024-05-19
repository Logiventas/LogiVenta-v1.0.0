//src\renderer\src\server\api\controllers\Session\login.controller.ts
import { Request, Response } from "express";
import { loginService } from "../../../services/login.service";
import jwt from "jsonwebtoken";

// Define tu clave secreta aquí o usa una variable de entorno para mayor seguridad
// deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
const JWT_SECRET = "my_super_secret_key";  // Asegúrate de usar una clave secreta segura

export const loginController = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  console.log("Datos recibidos:", req.body);

  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const user = await loginService(userName, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      const token = jwt.sign(
        { idUser: user.idUser, userName: user.userName },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
