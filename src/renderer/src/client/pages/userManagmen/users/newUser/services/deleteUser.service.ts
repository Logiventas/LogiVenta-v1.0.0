//src\renderer\src\client\pages\userManagmen\components\users\services\deleteUser.service.ts
import api from '../../../../../interceptors/api.interceptor'

export const deleteUser = async (id: number): Promise<void> => {
    try {
      await api.delete(`users/user/${id}`);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };
  