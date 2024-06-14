// src/renderer/src/server/api/controllers/Session/login.controller.ts
import { Request, Response } from "express";
import { loginService } from "../../../services/login.service";
import generateAccessToken from '../../../utils/generateAccessToken';

export const loginController = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const response = await loginService(userName, password);

    if (!response.success) {
      return res.status(response.status).json({ message: response.data.ms });
    } else {
      const token = generateAccessToken(response.data);
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      }); 

      return res.status(201).json({ message: "Login successful", idUser: response.data.id, userName: response.data.name });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
