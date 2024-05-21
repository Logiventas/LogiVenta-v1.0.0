// src/renderer/src/server/api/controllers/Session/verifyToken.controller.ts
import { Request, Response } from "express";

export const verifyTokenController = (req: Request, res: Response) => {
  const idUser = req.user.user.idUser;
  console.log("El ID: ", idUser, 'user: ', req.user);
  return res.status(200).json({ message: "Token is valid", idUser });
};
