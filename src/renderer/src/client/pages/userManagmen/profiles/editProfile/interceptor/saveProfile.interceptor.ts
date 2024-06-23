//src\renderer\src\client\pages\userManagmen\profiles\newProfile\interceptor\saveProfile.interceptor.ts
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// Crear una instancia de axios
const api = axios.create();

// Función para sanear y validar reintentos
const safeDelay = (delay: number): number => {
  if (typeof delay !== 'number' || Number.isNaN(delay) || delay < 0) {
    throw new Error('Delay must be a valid non-negative number');
  }
  return delay;
};

// Interceptor para solicitudes
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.withCredentials = true; // Incluye las cookies en las solicitudes
    console.log('Request Interceptor:', config);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor para respuestas
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Aquí podrías extraer cookies de la respuesta si fuera necesario
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
      console.log('Cookies recibidas:', setCookieHeader);
      // Opcional: puedes hacer algo con las cookies aquí
    }
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as InternalAxiosRequestConfig & { retryCount?: number };
    // Asegurarse de que config no es undefined antes de proceder
    if (config && error.response && error.response.status >= 500) {
      // Verificar si la propiedad 'retryCount' existe, si no, inicializarla
      if (!config.retryCount) {
        config.retryCount = 1;
      }
      // Verificar el número de reintentos
      if (config.retryCount < 3) {
        config.retryCount += 1;
        await new Promise<void>(resolve => setTimeout(() => resolve(), safeDelay(1000))); // Espera 1 segundo antes de reintento
        return api(config); // Reintenta la solicitud
      }
    }
    return Promise.reject(error); // Rechazar la promesa si no se cumple la condición para reintentar
  }
);

export default api;
