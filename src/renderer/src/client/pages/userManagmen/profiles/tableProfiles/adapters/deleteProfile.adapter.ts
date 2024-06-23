//src\renderer\src\client\pages\userManagmen\profiles\tableProfiles\adapters\deleteProfile.adapter.ts
import { deleteProfile as deleteProfileService } from '../services/deleteProfile.service';

interface DeleteProfileData {
  delete: { id: number, name: string };
  replace: { id: number, name: string };
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const deleteProfile = async (data: DeleteProfileData): Promise<ApiResponse> => {
  try {
    return await deleteProfileService(data);
  } catch (error) {
    console.error('Error al eliminar el perfil:', error);
    return { success: false, message: 'Error desconocido' };
  }
};
