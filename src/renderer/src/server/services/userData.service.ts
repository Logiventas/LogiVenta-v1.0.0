//src\renderer\src\server\services\userData.service.ts
import { User } from "../api/models/user.model"; // Asegúrate de que esta ruta sea correcta

export const getUserData = async (idUser: number, userName: string) => {
  try {
    const user = await User.findOne({
      where: {
        idUser,
        userName,
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
