import Profile from "../../../models/Profile.model";
import ProfilePermission from "../../../models/ProfilePermission.model";

export const editProfile = async (profileData, permissions: any[]) => {
  console.log("Edit Profile", profileData, '//////', permissions);

  if (!Profile.sequelize) {
    throw new Error("La instancia de Sequelize no está definida en el modelo Profile.");
  }

  const transaction = await Profile.sequelize.transaction();

  try {
    // Verificar si el perfil ya existe
    const existingProfile = await Profile.findByPk(profileData.id, { transaction });
    if (!existingProfile) {
      await transaction.rollback();
      return {
        success: false,
        message: `El perfil con el id '${profileData.id}' no existe`,
        data: null,
      };
    }

    // Actualizar los datos del perfil
    await existingProfile.update(profileData, { transaction });

    // Eliminar los permisos antiguos del perfil
    await ProfilePermission.destroy({ where: { profileId: profileData.id }, transaction });

    // Crear los nuevos permisos para el perfil
    const permissionPromises = permissions.map(permission => {
      return ProfilePermission.create({
        profileId: profileData.id,
        permissionsId: permission.permissionsId,
        state: permission.state
      }, { transaction });
    });

    await Promise.all(permissionPromises);

    // Confirmar la transacción
    await transaction.commit();

    return {
      success: true,
      message: 'Perfil y permisos actualizados con éxito',
      data: existingProfile,
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

    console.error("Error al editar el perfil:", error);
    return {
      success: false,
      message: 'Error al editar el perfil',
      data: null,
    };
  }
};
