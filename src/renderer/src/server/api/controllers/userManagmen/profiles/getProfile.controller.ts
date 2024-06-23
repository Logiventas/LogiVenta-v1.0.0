import { Request, Response } from 'express';
import { getProfile } from '../../../../services/userManagmen/profiles/getProfile.service';

export const getProfileController = async (req: Request, res: Response) => {
  try {
    console.log('ID---> ',req.params)
    const idProfile = parseInt(req.params.id, 10);

    if (isNaN(idProfile)) {
      return res.status(400).json({
        success: false,
        message: 'ID de perfil inválido',
      });
    }

    const result = await getProfile(idProfile);

    if (result.status) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json(result);
    }
  } catch (error) {
    console.error("Error in getProfileController:", error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};
