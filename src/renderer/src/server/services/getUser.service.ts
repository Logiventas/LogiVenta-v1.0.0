// src/renderer/src/server/services/getUser.service.ts
import User from "../models/User.model"; // Asegúrate de que esta ruta sea correcta

export const getUser = async (idUser: number) => {
  try {
    const user = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw new Error("Error al obtener los datos del usuario");
  }
};
