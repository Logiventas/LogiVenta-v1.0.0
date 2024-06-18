// src\renderer\src\server\services\setUser.service.ts
import User from "../../../models/User.model"; // Asegúrate de que esta ruta sea correcta
export const setUser = async (userInput: User) => {
    try {
      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({ where: { identification: userInput.identification } });
      if (existingUser) {
        console.log("El usuario ya existe.");
        return existingUser;
      }
  
      // Crear un nuevo usuario (User)
      const newUser = await User.create(userInput);
  
      console.log("Usuario creado exitosamente");
      return newUser;
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw new Error("Error al crear usuario");
    }
  };