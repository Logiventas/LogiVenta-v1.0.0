import User from "../../../../models/User.model";

export const getUserContext = async (idUser: number): Promise<any> => {
  try {
    const user = await User.findOne({
      where: {
        accountId: idUser,
      },
    });

    if (!user) {
        return {
          code: 200,
          status: false,
          message: 'No se encontró el usuario',
          data: null,
        };
    }else{
        return {
            code: 200,
            status: true,
            message: 'Usuario encontrado con éxito',
            data: user.dataValues,
          };
    }
  } catch (error) {
    return {
        code: 500,
        status: false,
        message: `Error al obtener los datos del usuario id: ${idUser}`,
        data: null,
      };
  }
};
