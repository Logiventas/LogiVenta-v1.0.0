import User from "../../../models/User.model";
import Job from "../../../models/Job.model";
import Residence from "../../../models/Residence.model";
import ContactEmergency from "../../../models/ContactEmergency.model";
import City from "../../../models/City.model";
import Country from "../../../models/Country.model";
import Account from "../../../models/Account.model"

export const updateUser = async (idUser: number, userInput: any,residence:any ,account:any,contact:any): Promise<any> => {
console.log("updateUser", userInput.jobId)
  const userDetails = {
    firstName:userInput.firstName,
    secondName:userInput.secondName,
    surname:userInput.surname,
    secondSurname:userInput.secondSurname,
    birthDate:null,
    identification:userInput.identification,
    phone:userInput.phone,
    mail:userInput.mail,
    sex:userInput.sex,
    accountId:userInput.accountId,
    photo:userInput.photo,
    jobId:userInput.jobId,
  };

  const residenceDetails = {
    address:residence.address,
    cityId:residence.cityId,
  };

  const accountDetails = {
    profileId:account.profileId,
  }

  const contactDetails = {
    firstName:contact.firstName,
    secondName:contact.secondName,
    surname:contact.surname,
    secondSurname:contact.secondSurname,
    mail:contact.mail,
    phone:contact.phone,
  }


  try {
    // Verificar que User.sequelize esté definido
    if (!User.sequelize) {
      throw new Error("La instancia de Sequelize no está definida en el modelo User.");
    }

    // Iniciar una transacción para asegurar la consistencia de los datos
    const transaction = await User.sequelize.transaction();

    try {
      // Actualizar usuario
      await User.update(userDetails, {
        where: { id: idUser },
        transaction,
      });
      //actualizar recidencia de usuario
      await Residence.update(residenceDetails, {
        where: { userId: idUser },
        transaction,
      });

      //actualizar Cuenta de Usuario
      await Account.update(accountDetails, {
        where: { id: idUser },
        transaction,
      });

      // Actualizar ContactEmergency
      await ContactEmergency.update(contactDetails, {
        where: { idUser: idUser },
        transaction,
      });

  

      // Confirmar la transacción
      await transaction.commit();

      // Recuperar el usuario actualizado
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

      return {
        code: 200,
        status: true,
        message: 'Usuario actualizado con éxito',
        data: user,
      };
    } catch (error) {
      // Revertir la transacción en caso de error
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return {
      code: 500,
      status: false,
      message: 'Error al actualizar el usuario',
      data: null,
    };
  }
};
