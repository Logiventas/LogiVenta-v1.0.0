import Permission from "../../../../models/Permission.model";

interface Response {
  code: number;
  status: boolean;
  message: string;
  data: Permission[] | null;
}

export const allPermissions = async (): Promise<Response> => {
  try {
    const permissions = await Permission.findAll();

    if (!permissions || permissions.length === 0) {
      return {
        code: 404,
        status: false,
        message: 'No se encontraron permisos',
        data: null,
      };
    }

    return {
      code: 200,
      status: true,
      message: 'Permisos encontrados con éxito',
      data: permissions,
    };
  } catch (error) {
    console.error('Error al obtener los permisos:', error);
    return {
      code: 500,
      status: false,
      message: 'Error al obtener los datos de permisos',
      data: null,
    };
  }
};
