import { Request, Response } from 'express';
import { getUsers } from '../../../services/getUsers.service';

export const getAllUsersController = async (_: Request, res: Response) => {
  try {
    const users = await getUsers();

    // Mapea los usuarios a la estructura esperada
    const formattedUsers = users.map(user => ({
      idUser: user.id,
      identification: user.identification,
      firstName: user.firstName,
      secondName: user.secondName,
      surname: user.surname,
      secondSurname: user.secondSurname,
      phone: user.phone,
      email: user.mail,
      sex: user.sex,
      profile: user.Account?.Profile?.name, 
      job: user.Job?.name 
    }));


    res.status(200).json(formattedUsers);
  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    res.status(500).send('Error fetching users');
  }
};
