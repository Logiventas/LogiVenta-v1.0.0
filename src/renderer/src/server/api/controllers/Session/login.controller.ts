//src\renderer\src\server\api\controllers\Session\login.controller.ts
import { Request, Response } from "express";
import { loginService } from "../../../services/login.service";

export const loginController = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  console.log("Datos recibidos:-------->", req.body);

  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const user = await loginService(userName, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      const token = 'Este_es_un_token';
      res.cookie('token', token, {
        httpOnly: true, // La cookie no es accesible desde JavaScript del lado del cliente
        secure: process.env.NODE_ENV === 'production', // La cookie solo se enviará a través de HTTPS en producción
        sameSite: 'strict', // Previene ataques CSRF
      });
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
