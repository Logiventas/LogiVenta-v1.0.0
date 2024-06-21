// src/renderer/src/client/services/userContext.service.ts
import api from '../interceptors/api.interceptor';
const URL = '/users/data';

const getUserData = async (): Promise<any> => {
  try {
    const response = await api.get(URL);
    console.log('Fetched User Data from API:', response.data); 
    
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default getUserData;
