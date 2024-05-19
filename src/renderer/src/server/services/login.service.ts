//src\renderer\src\server\services\login.service.ts
import { User } from "../api/models/user.model"; // Asegúrate de que esta ruta sea correcta
import bcrypt from "bcryptjs";

export const loginService = async (userName: string, password: string) => {
  console.log('Datos de los en servicio login:', userName, '-', password);
  try {
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return null; // Usuario no encontrado
    } else {
      console.log('Usuario encontrado');
    }

    if (!user.dataValues.password) {
      console.error("User found but password is undefined");
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);
    if (!isPasswordValid) {
      return null;
    } else {
      return user;
    }

  } catch (error) {
    console.error("Error in loginService:", error);
    throw new Error("Authentication failed");
  }
};
