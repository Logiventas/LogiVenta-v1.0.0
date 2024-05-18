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
    }

    return res.status(200).json({ 
      message: "Login successful", 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
