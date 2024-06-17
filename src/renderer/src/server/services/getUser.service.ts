import User from "../models/User.model"; // Asegúrate de que esta ruta sea correcta


export const getUser = async (idUser: number): Promise<any> => {
  console.log('Servicio getUser :  ', idUser);
  try {
    const user = await User.findOne({
      where: {
        id: idUser,
      },
    });

    if (!user) {
      return {
        code: 200,
        status: false,
        message: 'No se encontró el usuario',
        data: null,
      };
    }

    return {
      code: 200,
      status: true,
      message: 'Usuario encontrado con éxito',
      data: user.dataValues,
    };
  } catch (error) {
    return {
      code: 500,
      status: false,
      message: new Error(`Error al obtener los datos del usuario id: ${idUser}`),
      data: null,
    };
  }
};
