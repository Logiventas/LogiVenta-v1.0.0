import User from "../models/User.model";

export const getIdUser = async (id: number): Promise<number> => {
  try {
    const user = await User.findOne({
      where: {
        accountId: id,
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    return user.dataValues.id!;
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw new Error("Error al obtener los datos del usuario");
  }
};
