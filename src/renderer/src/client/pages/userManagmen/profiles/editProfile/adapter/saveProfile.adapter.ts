///src\renderer\src\client\pages\userManagmen\profiles\newProfile\adapter\saveProfile.adapter.ts
import { saveProfileService } from '../services/saveProfile.service';
import { Profile } from '../models/profile.model';

export const saveProfileAdapter = async (profile: Profile): Promise<any> => {
  try {
    const status = await saveProfileService(profile);
    console.log('Perfil guardado con éxito, status:', status);

      return status;


  } catch (error) {
    console.error('Error al guardar el perfil:');
    return false;
  }
};
