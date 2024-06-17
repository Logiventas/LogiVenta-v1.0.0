// src/renderer/src/server/script/loadAdminPermission.ts
import sequelize from "../config/db.config";
import ProfilePermission from "../models/ProfilePermission.model";
import Permission from "../models/Permission.model";

const loadAdminPermission = async (): Promise<boolean> => {
  try {
    // Sincronizar modelos
    await sequelize.sync();

    // Obtener el perfil de administrador (suponiendo que tiene un ID conocido, ej: 1)
    const adminProfileId = 1;

    // Obtener todos los permisos
    const permissions = await Permission.findAll();
    const adminPermissions = await ProfilePermission.findAll({
      where: { id: adminProfileId },
    });

    console.log("Permisos actuales ", adminPermissions);

    if (adminPermissions.length === 0) {
      permissions.forEach((permiso) => {
        console.log(permiso.dataValues.id);
        ProfilePermission.create({
          profileId: adminProfileId,
          permissionsId: permiso.dataValues.id,
          state: true,
        });
      });
    }

    console.log("Permisos de administrador cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los permisos de administrador:", error);
    return false;
  }
};

export default loadAdminPermission;
