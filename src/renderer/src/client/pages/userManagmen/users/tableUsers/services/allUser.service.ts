// src/renderer/src/client/pages/userManagmen/components/users/services/allUser.service.ts
import api from '../interceptor/allUser.interceptor';

const URL = '/users/allUsers';

const allUser = async (): Promise<any> => {
  try {
    const response = await api.get(URL);
    return response.data; // Devuelve los datos de los usuarios
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default allUser;
