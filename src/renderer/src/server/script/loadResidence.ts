//src\renderer\src\server\script\loadUser.ts
import User from "../models/Residence.model"; 

const loadUser = async (): Promise<boolean> => {
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { userId: 1 } });
    if (existingUser) {
      console.log("El usuario ya existe.");
      return true; // Retorna true si el usuario ya existe
    }

    // Crear un nuevo usuario (User)
    await User.create({
        userId:1,
        address: null,
        cityId: 1
    });

    console.log("Usuario cargado exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar la recidencia del usuario:", error);
    return false;
  }
};

export default loadUser;
