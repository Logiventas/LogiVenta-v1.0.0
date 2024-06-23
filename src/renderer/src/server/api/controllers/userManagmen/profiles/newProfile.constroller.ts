//src\renderer\src\server\api\controllers\userManagmen\profiles\newProfile.constroller.ts
import { Request, Response } from 'express';
import {newProfile} from '../../../../services/userManagmen/profiles/newProfile.service'

export const newProfileController = async (req: Request, res: Response) => {
  try {

    const data = req.body


    const profile ={
        name: data.name,
        description: data.description
    }
    const permissions = data.permissions.map((permission: any) => ({
        permissionsId: permission.id,
        state: permission.state,
      }));

    const result = await newProfile(profile,permissions)
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};

