//src\renderer\src\server\api\controllers\Users\setUser.controller.ts
import { Request, Response } from 'express';
import { updateUser } from '../../../../services/userManagmen/users/putUser.service';

export const putUserController = async (req: Request, res: Response) => {

  const  idUser  = req.query.id;

  const  userInput  = req.body;
  console.log('User', req.body);
  const user  = {
    firstName: userInput.firstName,
    secondName: userInput.secondName,
    surname: userInput.surname,
    secondSurname: userInput.secondSurname,
    birthDate:null,
    identification: userInput.identification,
    phone: userInput.phone,
    mail: userInput.mail,
    sex: userInput.sex,
    accountId:userInput.accountId,
    photo: userInput.photo,
    jobId:userInput.job,
  }
  
  const residence = {
    address: userInput.homeAddress,
    cityId: userInput.homeCity
  }
  const account={
    id:userInput.accountId,
    profileId:userInput.profile
  }
  const contact={
    firstName:userInput.emergencyFirstName,
    secondName:userInput.emergencySecondName,
    surname:userInput.emergencySurname,
    secondSurname:userInput.emergencySurname,
    mail:userInput.emergencyEmail,
    phone: userInput.emergencyPhone
  }



  const result = await updateUser(idUser, user,residence,account,contact);
  res.status(200).json(result);
};
