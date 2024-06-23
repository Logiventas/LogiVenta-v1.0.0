import Profile from '../../../models/Profile.model';
import ProfilePermission from '../../..//models/ProfilePermission.model';
import Permissions from '../../..//models/Permission.model';

export const getProfile = async (idProfile: number): Promise<any> => {
  try {
    const profile = await Profile.findOne({
      where: { id: idProfile },
      include: [
        {
          model: ProfilePermission,
          include: [{
            model: Permissions,
            attributes: ['id','name','description']
          }],
          attributes: ['id','state']
        }
      ]
    });

    if (!profile) {
      return {
        success: 200,
        status: false,
        message: 'No se encontró el perfil',
        data: null,
      };
    }

    return {
      success: 200,
      status: true,
      message: 'Perfil encontrado con éxito',
      data: profile,
    };
  } catch (error) {
    console.error(error);
    return {
      success: 500,
      status: false,
      message: 'Error al obtener los datos del perfil',
      data: null,
    };
  }
};
