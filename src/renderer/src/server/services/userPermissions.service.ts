import ProfilePermission from "../models/ProfilePermission.model";
import Account from "../models/Account.model";

export const userPermissions = async (accountId: number) => {
  try {
    // Encontrar la cuenta del usuario y obtener el profileId
    let account = await Account.findOne({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      console.error("Cuenta no encontrada");
      return null;
    }

    const profileId = account.dataValues.profileId;
    console.log('Perfil de usuario:', profileId);

    // Encontrar el perfil y sus permisos asociados
    const profilePermissions = await ProfilePermission.findAll({
      where: { profileId: profileId },

    });
    let data:any = []
    profilePermissions.forEach((permission) => {
      data.push(permission.dataValues);
    });
    return data;
  } catch (error) {
    console.error("Error al obtener los permisos del usuario:", error);
    throw new Error("Error al obtener los permisos del usuario");
  }
};
