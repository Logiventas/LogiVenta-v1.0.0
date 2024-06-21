import { Request, Response } from 'express';
import { createUser } from '../../../../services/userManagmen/users/postUser.service';
import {hashPassword} from '../../../../utils/hashPassword'
export const postUserController = async (req: Request, res: Response) => {
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
    accountId:null,
    photo: userInput.profilePicture,
    jobId: userInput.job,
  };

  const residence = {
    address: userInput.homeAddress,
    cityId: userInput.homeCity || 1,
  };

  const account = {
    password:await hashPassword(userInput.password) ,
    name: userInput.userName,
    state:1,
    creationDate:new Date(),
    profileId: userInput.profile
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
    const result = await createUser(user, residence, account, contact);

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
