// src/renderer/src/client/services/userContext.service.ts
import api from '../interceptors/api.interceptor';
import UserModel from '../model/User.model';

const URL = '/users/data';

const getUserData = async (): Promise<UserModel> => {
  try {
    const response = await api.get<UserModel>(URL);
    console.log('Fetched User Data from API:', response.data); // Añadir log para verificar los datos
    
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default getUserData;
