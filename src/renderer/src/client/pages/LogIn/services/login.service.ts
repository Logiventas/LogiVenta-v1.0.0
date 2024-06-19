import config from '@renderer/config.json';
import api from '../interceptors/login.interceptor';
import Login from '../models/login.model';

if (!config.IP_SERVER || !config.PORT_SERVER) {
    throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.timeout = 1000;

const URL = '/session/login';

const login = async (credentials: Login) => {
  console.log('se ejecutó el login');
  try {
    const response = await api.post(URL, credentials);
    console.log(response.headers);
    return response.status;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};


export default login;
