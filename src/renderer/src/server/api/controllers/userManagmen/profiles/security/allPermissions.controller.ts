import { Request, Response } from 'express';
import { allPermissions } from '../../../../../services/userManagmen/profiles/security/allPermissions.service';

export const getAllPermissionsController = async (_: Request, res: Response) => {
  try {
    const { code, status, message, data } = await allPermissions();

    if (!status) {
      return res.status(code).json({
        success: false,
        message,
        data: null
      });
    }

    // Mapea los permisos a la estructura esperada
    const formattedProfiles = data?.map(permission => ({
      id: permission.dataValues.id,
      name: permission.dataValues.name,
      description: permission.dataValues.description,
    }));

    res.status(200).json({
      success: true,
      message: 'Permisos obtenidos con éxito',
      data: formattedProfiles
    });
  } catch (error) {
    console.error("Error in getAllPermissionsController:", error);
    res.status(500).json({
      success: false,
      message: 'Error fetching permissions',
      data: null
    });
  }
};
