//src\renderer\src\server\script\loadUser.ts
import User from "../models/ContactEmergency.model"; 

const loadUser = async (): Promise<boolean> => {
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { idUser: 1 } });
    if (existingUser) {
      console.log("El usuario ya existe.");
      return true; // Retorna true si el usuario ya existe
    }

    // Crear un nuevo usuario (User)
    await User.create({
        idUser: 1,
        firstName: "John",
        secondName: "Doe",
        surname: "Smith",
        secondSurname: "Jones",
        mail: "john.doe",
        phone: 123456789
    });

    console.log("Usuario cargado exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar la recidencia del usuario:", error);
    return false;
  }
};

export default loadUser;
