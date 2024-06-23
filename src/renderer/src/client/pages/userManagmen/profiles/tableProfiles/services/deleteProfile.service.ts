//src\renderer\src\client\pages\userManagmen\profiles\tableProfiles\services\deleteProfile.service.ts
import config from '@renderer/config.json';

import api from '../interceptor/allProfile.interceptor';
import { AxiosError } from 'axios';

if (!config.IP_SERVER || !config.PORT_SERVER) {
  throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] = "GU02-03";
api.defaults.timeout = 1000;

interface DeleteProfileData {
  delete: { id: number, name: string };
  replace: { id: number, name: string };
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: null;
}

const URL = '/users/profile/deleteProfile'

export const deleteProfile = async (data: DeleteProfileData): Promise<ApiResponse> => {
  try {
    const response = await api.delete<ApiResponse>(URL, {
      data: data
    });
    return handleResponse(response);
  } catch (error: unknown) {
    return handleError(error);
  }
};

const handleResponse = (response: any): ApiResponse => {
    console.log('Respuesta del servidor ', response.data);
    if (response.data.success) {
        return { success: true, message: 'Perfil eliminado correctamente' ,data:null};
    } else {
        return { success: false, message: 'Fallo al eliminar el perfil',data:null };
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
    return { success: false, message: errorMessage,data:null };
};

const getErrorMessageFromStatus = (status: number, message: string): string => {
    switch (status) {
        case 404:
            return 'Perfiles no encontrados';
        case 500:
            return 'Error interno del servidor';
        default:
            return `Error al eliminar el perfil: ${message}`;
    }
};
