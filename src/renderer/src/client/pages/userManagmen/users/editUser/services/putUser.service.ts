import config from '@renderer/config.json';
import api from '../interceptor/putUser.interceptor';
import { AxiosError } from 'axios';

if (!config.IP_SERVER || !config.PORT_SERVER) {
    throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] = "GU01-00";
api.defaults.timeout = 1000;

interface UserData {
  // Define aquí los campos específicos que tu objeto de usuario tendrá
  [key: string]: any;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const putUser = async (idUser: number, userData: UserData): Promise<ApiResponse> => {
    console.log('Datos del Usuario ', idUser, userData);
    try {
        const response = await api.put(`/users/user?id=${idUser}`, userData);
        console.log('Respuesta del servidor ', response.data);
        if (response.data.success) {
            return { success: true, message: 'Usuario actualizado correctamente' };
        } else {
            return { success: false, message: 'Fallo al actualizar el usuario' };
        }
    } catch (error: unknown) {
        let errorMessage = 'Error desconocido';

        if (error instanceof AxiosError) {
            if (error.response) {
                // Errores de respuesta del servidor
                if (error.response.status === 404) {
                    errorMessage = 'Usuario no encontrado';
                } else if (error.response.status === 500) {
                    errorMessage = 'Error interno del servidor';
                } else {
                    errorMessage = `Error al actualizar el usuario`;
                }
            } else if (error.request) {
                // Errores de solicitud (sin respuesta del servidor)
                errorMessage = 'No se recibió respuesta del servidor';
            } else {
                // Otros errores
                errorMessage = `Error en la configuración de la solicitud: ${error.message}`;
            }
        }

        console.error(errorMessage, error);
        return { success: false, message: errorMessage };
    }
};
