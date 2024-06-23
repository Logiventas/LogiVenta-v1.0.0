import { Request, Response } from 'express';
import { editProfile } from '../../../../services/userManagmen/profiles/editProfile.service';

export const editProfileController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const profile = {
      id: data.id,
      name: data.name,
      description: data.description,
    };

    const permissions = data.permissions.map((permission: any) => ({
      permissionsId: permission.id,
      state: permission.state,
    }));

    const result = await editProfile(profile, permissions);
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error("Error en el controlador editProfile:", error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};
