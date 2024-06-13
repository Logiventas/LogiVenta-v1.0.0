//src\renderer\src\server\script\loadUser.ts
import User from "../models/User.model"; 

const loadUser = async (): Promise<boolean> => {
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { identification: 1032447061 } });
    if (existingUser) {
      console.log("El usuario ya existe.");
      return true; // Retorna true si el usuario ya existe
    }

    // Crear un nuevo usuario (User)
    await User.create({
      id:1,
      firstName: "Usuario",
      secondName: "",
      surname: "Administrador",
      secondSurname: "",
      birthDate: "",
      identification: 1032447061,
      phone: 1221,
      mail: "bguevara@gmail.com",
      sex: "H",
      accountId:1
    });

    console.log("Usuario cargado exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar el usuario:", error);
    return false;
  }
};

export default loadUser;
