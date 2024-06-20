import User from "../../../models/User.model";
import Job from "../../../models/Job.model";
import Residence from "../../../models/Residence.model";
import ContactEmergency from "../../../models/ContactEmergency.model";
import City from "../../../models/City.model";
import Country from "../../../models/Country.model";
import Account from "../../../models/Account.model"

export const updateUser = async (idUser: number, userInput: any, residence: any, account: any, contact: any): Promise<any> => {
  const userDetails = {
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
    jobId: userInput.jobId,
  };

  const residenceDetails = {
    address: residence.address,
    cityId: residence.cityId,
  };

  const accountDetails = {
    profileId: account.profileId,
  }

  const contactDetails = {
    firstName: contact.firstName,
    secondName: contact.secondName,
    surname: contact.surname,
    secondSurname: contact.secondSurname,
    mail: contact.mail,
    phone: contact.phone,
  }

  try {
    if (!User.sequelize) {
      throw new Error("La instancia de Sequelize no está definida en el modelo User.");
    }

    const transaction = await User.sequelize.transaction();

    try {
      await User.update(userDetails, {
        where: { id: idUser },
        transaction,
      });

      await Residence.update(residenceDetails, {
        where: { userId: idUser },
        transaction,
      });

      await Account.update(accountDetails, {
        where: { id: idUser },
        transaction,
      });

      await ContactEmergency.update(contactDetails, {
        where: { idUser: idUser },
        transaction,
      });

      await transaction.commit();

      const user = await User.findOne({
        where: { id: idUser },
        include: [
          {
            model: Job,
            attributes: ['name'],
          },
          {
            model: Residence,
            attributes: ['address'],
            include: [
              {
                model: City,
                attributes: ['id'],
                include: [
                  {
                    model: Country,
                    attributes: ['id'],
                  },
                ],
              },
            ],
          },
          {
            model: ContactEmergency,
          },
        ],
        attributes: [
          'id', 'firstName', 'secondName', 'surname', 'secondSurname', 
          'birthDate', 'identification', 'phone', 'mail', 'sex', 'photo'
        ],
      });

      if (user) {
        return {
          success: true,
          message: 'Usuario actualizado con éxito',
          data: user,
        };
      } else {
        return {
          success: false,
          message: 'Usuario no encontrado',
          data: null,
        };
      }
    } catch (error: any) {
      await transaction.rollback();
      if (error.name === 'SequelizeValidationError') {
        return {
          success: false,
          message: 'Error de validación: ' + error.errors.map((e: any) => e.message).join(', '),
          data: null,
        };
      }

      return {
        success: false,
        message: 'Error al actualizar el usuario',
        data: null,
      };
    }
  } catch (error: any) {
    console.error("Error al actualizar usuario:", error);
    return {
      success: false,
      message: 'Error al actualizar el usuario: ' + error.message,
      data: null,
    };
  }
};
