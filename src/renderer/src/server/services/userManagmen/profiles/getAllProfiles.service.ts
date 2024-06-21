
import Profile from "../../../models/Profile.model";

export const getAllProfiles = async () => {
  try {
    const profiles = await Profile.findAll({
      attributes: [
        'id', 'name', 'description',
      ],
    
      raw: true, // Agrega esta opción para simplificar la estructura de los resultados
    });

    return profiles;
  } catch (error) {
    console.error("Error al obtener los perfiles de suuario:", error);
    throw new Error("Error al obtener los perfiles de suuario: " );
  }
};
