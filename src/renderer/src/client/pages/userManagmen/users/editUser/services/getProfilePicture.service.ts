//src\renderer\src\client\pages\userManagmen\components\users\services\getProfilePicture.service.ts
import api from '../../../../../interceptors/api.interceptor';

// Función para obtener la imagen de perfil de un usuario
export const getProfilePicture = async (id: number): Promise<Blob> => {
  try {
    const response = await api.get<Blob>(`/users/user/image/${id}`, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile picture:', error);
    throw error;
  }
};
