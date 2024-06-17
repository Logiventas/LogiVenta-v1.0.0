import perission from "../models/ProfilePermission.model";

export const authorization = async (id: number ,permission:string): Promise<boolean> => {
  try {
    const user = await perission.findOne({
      where: {
        profileId: id,
        permissionsId: permission
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user.dataValues.state;
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw new Error("Error al obtener los datos del usuario");
  }
};
