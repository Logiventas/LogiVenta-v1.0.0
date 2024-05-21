//src\renderer\src\server\services\dataUser.service.ts
import { UserPermission } from "../api/models/UserPermission.model"; // Asegúrate de que esta ruta sea correcta

export const userPermissions = async (idUser: number) => {
  try {
    const permissions = await UserPermission.findOne({
      where: {
        userId: idUser,
      },
    });

    if (!permissions) {
      return null;
    }

    return permissions;
  } catch (error) {
    console.error("Error al obtener los permisos del usuario:", error);
    throw new Error("Error al obtener los permisos del usuario");
  }
};
