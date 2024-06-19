import config from '@renderer/config.json';
import api from '../interceptor/getUser.interceptor';
if (!config.IP_SERVER || !config.PORT_SERVER) {
  
    throw new Error('La configuración del servidor no está definida correctamente en config.json');
  }
  

// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] =  "GU01-00";
api.defaults.timeout = 1000;



export const getUser = async (id: number): Promise<any> => {
    const URL = `/users/user?id=${id}`;
    try {
        const response = await api.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};
