import { Request, Response } from 'express';
import { updateUser } from '../../../../services/userManagmen/users/putUser.service';

export const putUserController = async (req: Request, res: Response) => {
  const idUser = parseInt(req.query.id as string, 10);

  if (isNaN(idUser)) {
    return res.status(400).json({
      success: false,
      message: 'ID de usuario no válido',
    });
  }

  const userInput = req.body;
  const user = {
    firstName: userInput.firstName,
    secondName: userInput.secondName,
    surname: userInput.surname,
    secondSurname: userInput.secondSurname,
    birthDate: null,
    identification: userInput.identification,
    phone: userInput.phone,
    mail: userInput.mail,
    sex: userInput.sex,
    accountId: userInput.accountId,
    photo: userInput.photo,
    jobId: userInput.job,
  };

  const residence = {
    address: userInput.homeAddress,
    cityId: userInput.homeCity || 1,
  };

  const account = {
    id: userInput.accountId,
    profileId: userInput.profile,
  };

  const contact = {
    firstName: userInput.emergencyFirstName,
    secondName: userInput.emergencySecondName,
    surname: userInput.emergencySurname,
    secondSurname: userInput.emergencySecondSurname,
    mail: userInput.emergencyEmail,
    phone: userInput.emergencyPhone,
  };

  try {
    const result = await updateUser(idUser, user, residence, account, contact);
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
};
