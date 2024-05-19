// src/renderer/src/server/api/controllers/user.controller.ts
import { Request, Response } from "express";

export const getUserData = (_: Request, res: Response) => {
  try {
    const userData = {
      idUser: "123",
      firstName: "Brayan",
      secondName: "A.",
      surname: "Guevara",
      secondSurname: "",
      email: "john.doe@example.com",
      userName: "johndoe",
      acceso: {
        gestionArchivo: true,
        gestionSistema: true,
        gestionCaja: true,
        gestionUsuairo: false,
        gestionIventario: false,
        gestionProveedores: false,
        registroVentas: false,
      },
    };

    console.log("User data retrieved successfully:", userData);
    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error in getUserData controller:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
