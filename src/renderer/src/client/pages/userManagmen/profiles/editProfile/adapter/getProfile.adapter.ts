//src\renderer\src\client\pages\userManagmen\profiles\editProfile\adapter\getProfile.adapter.ts
import { getProfile } from '../services/getProfile.service';
import { Permission } from '../models/permission.model';
import { Profile } from '../models/profile.model';

export const getPermissions = async (id: any): Promise<Profile> => {
  try {
    const userData = await getProfile(id);
    const data = userData.data;

    let permissions: Permission[] = [];


    data.ProfilePermissions.forEach((permission: any) => {
      permissions.push({
        id: permission.Permission.id,
        name: permission.Permission.name,
        description: permission.Permission.description,
        state: permission.state
      });
    });

    let profile: Profile = {
      id: data.id,
      name: data.name,
      description: data.description,
      permissions: permissions
    };

    console.log('DATOS DE PERMISOS: ', profile);
    return profile;

  } catch (error) {
    console.error('Error al obtener los datos de permisos:', error);
    throw error;
  }
};
