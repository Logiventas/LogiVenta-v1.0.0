import User from "../models/User.model"; // Asegúrate de que esta ruta sea correcta
import Account from "../models/Account.model";
import Profile from "../models/Profile.model";
import Job from "../models/Job.model";

export const getUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: [
        'id', 'identification', 'firstName', 'secondName', 'surname',
        'secondSurname', 'phone', 'mail', 'sex','jobId'
      ],
      include: [
        {
          model: Account,
          attributes: ['id'],
          include: [
            {
              model: Profile,
              attributes: ['name'],
            }
          ]
        },
        {
          model: Job,
          attributes: ['name'],
        }
      ],
      raw: true, // Agrega esta opción para simplificar la estructura de los resultados
      nest: true // Agrega esta opción para que Sequelize anide los resultados de las relaciones correctamente
    });

    return users;
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    throw new Error("Error al obtener los datos del usuario");
  }
};
