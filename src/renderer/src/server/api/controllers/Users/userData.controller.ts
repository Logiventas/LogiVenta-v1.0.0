//src\renderer\src\server\api\controllers\Users\userData.controller.ts
import { Request, Response } from "express";
import { getUserData } from "../../../services/userData.service"; // Asegúrate de que esta ruta sea correcta
import { userPermissions } from "../../../services/userPermissions.service"; // Asegúrate de que esta ruta sea correcta


const getUserDataController = async (req: Request, res: Response) => {
  const idUser = req.user.user.idUser;
  const userName = req.user.user.userName;

  try {
    // Obtener datos del usuario
    const user = await getUserData(idUser, userName);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Obtener permisos del usuario
    const permissions = await userPermissions(idUser);
    if (!permissions) {
      return res.status(404).json({ message: "Permisos de usuario no encontrados" });
    }
    console.log('Datos optenidos: ',user);
    // Asegurarse de que los datos están correctamente accesibles
    const userData = {
      idUser: user.dataValues.idUser,
      firstName: user.dataValues.firstName,
      secondName: user.dataValues.secondName,
      surname: user.dataValues.surname,
      secondSurname: user.dataValues.secondSurname,
      email: user.dataValues.email,
      userName: user.dataValues.userName,
      access: {
        gestionArchivo: permissions.dataValues.gestionArchivo,
        gestionSistema: permissions.dataValues.gestionSistema,
        gestionCaja: permissions.dataValues.gestionCaja,
        gestionUsuario: permissions.dataValues.gestionUsuario,
        gestionInventario: permissions.dataValues.gestionInventario,
        gestionProveedores: permissions.dataValues.gestionProveedores,
        registroVentas: permissions.dataValues.registroVentas,
      },
    };

    console.log("User data retrieved successfully:", userData);
    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error in getUserDataController:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getUserDataController;
