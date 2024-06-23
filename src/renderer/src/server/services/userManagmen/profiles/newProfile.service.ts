import Profile from "../../../models/Profile.model";
import ProfilePermission from "../../../models/ProfilePermission.model";

export const newProfile = async (profileData, permissions: any[]) => {
  if (!Profile.sequelize) {
    throw new Error("La instancia de Sequelize no está definida en el modelo Profile.");
  }

  try {
    // Verificar si el perfil ya existe
    const existingProfile = await Profile.findOne({ where: { name: profileData.name } });
    if (existingProfile) {
      return {
        success: false,
        message: `El perfil con el nombre '${profileData.name}' ya existe`,
        data: null,
      };
    }

    const transaction = await Profile.sequelize.transaction();

    try {
      // Crear el perfil dentro de la transacción
      const profile = await Profile.create(profileData, { transaction });

      // Asociar los permisos al perfil dentro de la transacción
      const permissionPromises = permissions.map(permission => {
        return ProfilePermission.create({
          profileId: profile.id,
          permissionsId: permission.permissionsId,
          state: permission.state
        }, { transaction });
      });

      await Promise.all(permissionPromises);

      // Confirmar la transacción
      await transaction.commit();

      return {
        success: true,
        message: 'Perfil y permisos creados con éxito',
        data: profile,
      };
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
        message: 'Error al crear el perfil',
        data: null,
      };
    }
  } catch (error: any) {
    console.error("Error al crear el perfil:", error);
    return {
      success: false,
      message: 'Error al crear el perfil: ' + error.message,
      data: null,
    };
  }
};
