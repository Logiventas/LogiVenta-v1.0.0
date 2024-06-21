// src/renderer/src/client/pages/userManagmen/profiles/tableProfiles/services/allProfiles.service.ts
import config from '@renderer/config.json';
import api from '../interceptor/allProfile.interceptor';
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

interface Profile {
  id: number;
  profile: string;
  description: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Profile[];
}

const URL = '/users/profile/allProfiles';

const allUser = async (): Promise<Profile[]> => {
  try {
    const response = await api.get<ApiResponse>(URL);
    console.log(response);

    if (response.data.success) {
      return response.data.data;
    } else {
      console.error('Error en la respuesta del servidor:', response.data.message);
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error: unknown) {
    let errorMessage = 'Error desconocido';

    if (error instanceof AxiosError) {
      if (error.response) {
        // Errores de respuesta del servidor
        if (error.response.status === 404) {
          errorMessage = 'Perfiles no encontrados';
        } else if (error.response.status === 500) {
          errorMessage = 'Error interno del servidor';
        } else {
          errorMessage = `Error al obtener los perfiles: ${error.response.data.message}`;
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
    throw new Error(errorMessage);
  }
};

export default allUser;
