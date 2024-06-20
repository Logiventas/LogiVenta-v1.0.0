// src\renderer\src\client\pages\userManagmen\users\editUser\services\putUser.service.ts
import config from '@renderer/config.json';
import api from '../interceptor/putUser.interceptor';
if (!config.IP_SERVER || !config.PORT_SERVER) {
  
    throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] =  "GU01-00";
api.defaults.timeout = 1000;



export const putUser = async (idUser: number, userData: any): Promise<void> => {

    console.log('Datos del Usuario ',idUser, userData);
    try {
        await api.put(`/users/user?id=${idUser}`, userData);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
};
