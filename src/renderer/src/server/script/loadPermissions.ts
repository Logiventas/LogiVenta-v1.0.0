import Permission from "../models/Permission.model"; // Verifica la ruta

const permissions = [
  {
    id: "GU00-00",
    name: "Gestión de Usuarios",
    description: "Permite el acceso a la gestión de usuarios",
  },
  {
    id: "GU01-00",
    name: "Gestión de Usuario",
    description: "Permite el acceso a la gestión de los usuarios",
  },
  {
    id: "GU02-00",
    name: "Gestión de Perfiles",
    description: "Permite gestionar los diferentes perfiles de usuario",
  },
  {
    id: "GU03-00",
    name: "Gestión de Cargos",
    description: "Permite gestionar los diferentes cargos para usuarios",
  },
];

const loadPermissions = async (): Promise<boolean> => {
  try {
    for (const permission of permissions) {
      const existingPermission = await Permission.findOne({ where: { id: permission.id } });
      if (!existingPermission) {
        await Permission.create(permission);
      }
    }
    console.log("Permisos cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los permisos:", error);
    return false;
  }
};

export default loadPermissions;
