import api from '../interceptors/api.interceptor';
const URL = '/users/Countries';

const getCountriesCities = async (): Promise<any> => {
  try {
    const response = await api.get(URL);
    console.log('Fetched Countries  Data from API:', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Countries data:', error);
    throw error;
  }
};

export default getCountriesCities;
