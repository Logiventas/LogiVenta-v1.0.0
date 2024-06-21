import api from '../interceptors/api.interceptor';
const URL = '/users/Profile';

const getProfiles = async (): Promise<any> => {
  try {
    const response = await api.get(URL);
    console.log('Fetched Profiles  Data from API:', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Profiles data:', error);
    throw error;
  }
};

export default getProfiles;
