import Profile from "../models/Profile.model"; // Verifica la ruta

const profiles = [
  {
    name: "Administrador",
    description: "Perfil de usuario administrador con todos los permisos",
  },
  { name: "Usuario", description: "Perfil de usuario estándar" },
  {
    name: "Invitado",
    description: "Perfil de usuario invitado con permisos limitados",
  },
  // Añade más perfiles según sea necesario
];

const loadProfiles = async (): Promise<boolean> => {
  try {
    for (const profile of profiles) {
      const existingProfile = await Profile.findOne({ where: { name: profile.name } });
      if (!existingProfile) {
        await Profile.create(profile);
      }
    }
    console.log("Perfiles cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los perfiles:", error);
    return false;
  }
};

export default loadProfiles;
