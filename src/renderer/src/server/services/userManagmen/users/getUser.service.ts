import User from "../../../models/User.model";
import Account from "../../../models/Account.model";
import Profile from "../../../models/Profile.model";
import Job from "../../../models/Job.model";
import Residence from "../../../models/Residence.model";
import ContactEmergency from "../../../models/ContactEmergency.model";
import City from "../../../models/City.model";
import Country from "../../../models/Country.model";
export const getUser = async (idUser: number): Promise<any> => {
  try {
    const user = await User.findOne({
      where: { id: idUser },
      include: [
        {
          model: Account,
          attributes: ['name'],
          include: [
            {
              model: Profile,
              attributes: ['name'],
            },
          ],
     
        },
        {
          model: Job,
          attributes: ['name'],
        },
        {
          model:Residence,
          attributes: ['address'],
          include:[
            {
              model:City,
              attributes: ['id'],
              include:[
                {
                  model:Country,
                  attributes: ['id'],
                }
              ],
          
            }
          ]

        },
        {
          model:ContactEmergency,
   
        }


      ],
      attributes: [
        'id', 'firstName', 'secondName', 'surname', 'secondSurname', 
        'birthDate', 'identification', 'phone', 'mail', 'sex', 'photo'
      ],
    });

    if (!user) {
      return {
        code: 200,
        status: false,
        message: 'No se encontró el usuario',
        data: null,
      };
    }

    return {
      code: 200,
      status: true,
      message: 'Usuario encontrado con éxito',
      data: user,
    };
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      status: false,
      message: `Error al obtener los datos del usuario id: ${idUser}`,
      data: null,
    };
  }
};
