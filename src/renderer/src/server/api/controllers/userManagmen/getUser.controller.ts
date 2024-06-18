//src\renderer\src\server\api\controllers\Users\getUserController.ts
import { Request, Response } from 'express';
import {getUser} from '../../../services/userManagmen/users/getUser.service'
import {getContactEmergency} from '../../../services/userManagmen/users/getContactEmergency.service'


export const getUserController = async (req: Request, res: Response) => {
  try {
    const idUser= req.query.id
    const usuario = await getUser(idUser)
    const contacto = await getContactEmergency(idUser)



    console.log(usuario)
    console.log(contacto)


  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    res.status(500).send('Error fetching users');
  }
};
