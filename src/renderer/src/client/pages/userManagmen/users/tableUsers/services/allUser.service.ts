// src/renderer/src/client/pages/userManagmen/components/users/services/allUser.service.ts
import config from '@renderer/config.json';
import api from '../interceptor/allUser.interceptor';

if (!config.IP_SERVER || !config.PORT_SERVER) {
  
  throw new Error('La configuración del servidor no está definida correctamente en config.json');
}


// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] =  "GU01-00";
api.defaults.timeout = 1000;

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
