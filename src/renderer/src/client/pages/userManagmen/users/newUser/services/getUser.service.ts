import api from '../../../../../interceptors/api.interceptor'

export const getUser = async (id: number): Promise<void> => {
    try {
      await api.get(`/users/user${id}`);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };
  