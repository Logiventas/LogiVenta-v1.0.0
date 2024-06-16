//src\renderer\src\server\api\controllers\Users\getUserController.ts
import { Request, Response } from 'express';


export const getUserController = async (req: Request, res: Response) => {
  try {


    // Mapea los usuarios a la estructura esperada
    const formattedUsers =''

    console.log('Usuarios formateados:', formattedUsers);

    res.status(200).json(formattedUsers);
  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    res.status(500).send('Error fetching users');
  }
};
