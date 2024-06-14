import api from '../interceptors/api.interceptor';
const URL = '/users/Jobs';

const getJobs = async (): Promise<any> => {
  try {
    const response = await api.get(URL);
    console.log('Fetched Jobs  Data from API:', response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Jobs data:', error);
    throw error;
  }
};

export default getJobs;
