//src\renderer\src\server\api\controllers\Users\getUserController.ts
import { Request, Response } from "express";
import { getUser } from "../../../../services/userManagmen/users/getUser.service";

export const getUserController = async (req: Request, res: Response) => {
  try {
    const idUser = req.query.id;

    const user = await getUser(idUser);
    let data;
    if (user.status) {
      data = {
        id: user.data.dataValues.id,
        firstName: user.data.dataValues.firstName,
        secondName: user.data.dataValues.secondName,
        surname: user.data.dataValues.surname,
        secondSurname: user.data.dataValues.secondSurname,
        birthDate: user.data.dataValues.birth,
        identification: user.data.dataValues.ident,
        phone: user.data.dataValues.phone,
        mail: user.data.dataValues.mail,
        sex: user.data.dataValues.sex,
        photo: user.data.dataValues.photo,
        job: user.data.dataValues.Job.dataValues.name,
        account: user.data.dataValues.Account.dataValues.name,
        profile:
          user.data.dataValues.Account.dataValues.Profile.dataValues.name,
        residence: user.data.dataValues.Residence.dataValues.address,
        city: user.data.dataValues.Residence.dataValues.City.dataValues.name,
        country:
          user.data.dataValues.Residence.dataValues.City.dataValues.Country
            .dataValues.name,
        contactEmergencies: user.data.dataValues.ContactEmergencies,
      };
      return res.status(200).json({ message: "", data: data });
    }else{
      data = null;
      return res.status(204).json({ message: "", data: data });
    }


  } catch (error) {
    console.error("Error in getAllUsersController:", error);
    res.status(500).send("Error fetching users");
  }
};
