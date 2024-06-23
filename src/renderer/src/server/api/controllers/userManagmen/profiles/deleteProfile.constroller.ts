import { Request, Response } from 'express';
import { deleteProfileService } from '../../../../services/userManagmen/profiles/deleteProfile.service';

export const deleteProfileController = async (req: Request, res: Response) => {
  try {
    const { delete: deleteProfile, replace: replaceProfile } = req.body;

    const result = await deleteProfileService(deleteProfile, replaceProfile);
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error("Error en el controlador deleteProfile:", error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};
