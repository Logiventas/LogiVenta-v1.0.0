import config from '@renderer/config.json';
import api from '../interceptor/saveProfile.interceptor';
import { AxiosError } from 'axios';

if (!config.IP_SERVER || !config.PORT_SERVER) {
  throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

// Ajustar la configuración base de la instancia de axios
api.defaults.baseURL = `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`;
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';
api.defaults.headers["x-permission-code"] = "GU02-01";
api.defaults.timeout = 1000;

interface ProfileData {
  // Define aquí los campos específicos que tu objeto de perfil tendrá
  [key: string]: any;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const saveProfileService = async (data: ProfileData): Promise<ApiResponse> => {
  const URL = `/users/profile/newProfile`;
  try {
    const response = await api.post(URL, data);
    return handleResponse(response);
  } catch (error: unknown) {
    return handleError(error);
  }
};

const handleResponse = (response: any): ApiResponse => {
  console.log('Respuesta del servidor ', response.data);
  if (response.data.success) {
    return { success: true, message: 'Perfil creado correctamente' };
  } else {
    return { success: false, message: 'Fallo al crear el perfil' };
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
      return 'Problema con el servidor';
    case 500:
      return 'Error interno del servidor';
    default:
      return `Error al crear el perfil: ${message}`;
  }
};
