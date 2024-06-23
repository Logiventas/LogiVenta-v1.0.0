import { Request, Response } from 'express';
import { getAllProfiles } from '../../../../services/userManagmen/profiles/getAllProfiles.service';

export const getAllProfilesController = async (_: Request, res: Response) => {
  try {
    const perfiles = await getAllProfiles();

    // Mapea los usuarios a la estructura esperada
    const formaterProfiles = perfiles.map(user => ({
      id: user.id,
      profile: user.name,
      description: user.description,
    }));


    res.status(200).json({
      success:true,
      message:'',
      data:formaterProfiles
    });
  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    res.status(500).send('Error fetching users');
  }
};
