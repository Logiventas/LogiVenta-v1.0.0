import config from '@renderer/config.json';
import api from '../interceptor/postUser.interceptor';
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

export const postUser = async (userData: UserData): Promise<ApiResponse> => {
    try {
        const response = await api.post(`/users/user`, userData);
        return handleResponse(response);
    } catch (error: unknown) {
        return handleError(error);
    }
};

const handleResponse = (response: any): ApiResponse => {
    console.log('Respuesta del servidor ', response.data);
    if (response.data.success) {
        return { success: true, message: 'Usuario creado correctamente' };
    } else {
        return { success: false, message: 'Fallo al crear el usuario' };
    }
};

const handleError = (error: unknown): ApiResponse => {
    let errorMessage = 'Error desconocido';

    if (error instanceof AxiosError) {
        if (error.response) {
            errorMessage = getErrorMessageFromStatus(error.response.status, error.response.data.message);
        } else if (error.request) {
            errorMessage = 'No se recibió respuesta del servidor';
        } else {
            errorMessage = `Error en la configuración de la solicitud: ${error.message}`;
        }
    }

    console.error(errorMessage, error);
    return { success: false, message: errorMessage };
};

const getErrorMessageFromStatus = (status: number, message: string): string => {
    switch (status) {
        case 404:
            return 'problema con el servidor';
        case 500:
            return 'Error interno del servidor';
        default:
            return `Error al crear el usuario: ${message}`;
    }
};
