import Profile from "../../../models/Profile.model";
import ProfilePermission from "../../../models/ProfilePermission.model";
import Account from "../../../models/Account.model";

export const deleteProfileService = async (deleteProfile: { id: number, name: string }, replaceProfile: { id: number, name: string }) => {
  if (!Profile.sequelize) {
    throw new Error("La instancia de Sequelize no está definida en el modelo Profile.");
  }

  const transaction = await Profile.sequelize.transaction();

  try {
    // Verificar si el perfil a eliminar existe
    const existingProfile = await Profile.findByPk(deleteProfile.id, { transaction });
    if (!existingProfile) {
      await transaction.rollback();
      return {
        success: false,
        message: `El perfil con el id '${deleteProfile.id}' no existe`,
        data: null,
      };
    }

    // Verificar si el perfil de reemplazo existe
    const newProfile = await Profile.findByPk(replaceProfile.id, { transaction });
    if (!newProfile) {
      await transaction.rollback();
      return {
        success: false,
        message: `El perfil con el id '${replaceProfile.id}' para reasignar usuarios no existe`,
        data: null,
      };
    }

    // Reasignar cuentas al nuevo perfil
    await Account.update(
      { profileId: replaceProfile.id },
      { where: { profileId: deleteProfile.id }, transaction }
    );

    // Eliminar los permisos antiguos del perfil a eliminar
    await ProfilePermission.destroy({ where: { profileId: deleteProfile.id }, transaction });

    // Eliminar el perfil
    await Profile.destroy({ where: { id: deleteProfile.id }, transaction });

    // Confirmar la transacción
    await transaction.commit();

    return {
      success: true,
      message: 'Perfil eliminado y cuentas reasignadas con éxito',
      data: null,
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

    console.error("Error al eliminar el perfil:", error);
    return {
      success: false,
      message: 'Error al eliminar el perfil',
      data: null,
    };
  }
};
