//src\renderer\src\server\services\login.service.ts
import { User  } from "../api/models/user.model"; // Asegúrate de que esta ruta sea correcta
import bcrypt from "bcryptjs";

export const loginService = async (userName: string, password: string) => {
  console.log('Datos de los en servicio login: ' + userName, ' - ',password)
  try {
    // Buscar el usuario por nombre de usuario
    const user = await User.findOne({ where: { userName }  });
    if (!user) {
      return null; // Usuario no encontrado
    }else{
      console.log('Usuario encontrado')
    }

    // Verificar que el campo de contraseña no sea undefined
    if (!user.dataValues.password) {
      console.error("User found but password is undefined");
      return null;
    }

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);

    if (!isPasswordValid) {
      return false;
    }else{
      return true;
    }


  } catch (error) {
    console.error("Error in loginService: ", error);
    throw new Error("Authentication failed");
  }
};
