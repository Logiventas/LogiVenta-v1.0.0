//src\renderer\src\client\pages\userManagmen\users\tableUsers\interceptor\allUser.interceptor.ts
import api from '@client/interceptors/api.interceptor';

// Interceptor para solicitudes
api.interceptors.request.use(
  (config) => {
    // Agrega lógica aquí antes de enviar cada solicitud, como tokens de autenticación
    console.log('Request Interceptor:', config);

    // Por ejemplo, si tienes un token de autenticación almacenado en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Manejo de errores de solicitud
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor para respuestas
api.interceptors.response.use(
  (response) => {
    // Manejo de respuestas exitosas
    console.log('Response Interceptor:', response);
    return response;
  },
  (error) => {
    // Manejo de errores de respuesta
    console.error('Response Interceptor Error:', error);

    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      const status = error.response.status;
      let message = 'Ocurrió un error. Por favor, inténtelo de nuevo.';
      switch (status) {
        case 400:
          message = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
          break;
        case 401:
          message = 'No autorizado. Verifique sus credenciales.';
          break;
        case 403:
          message = 'Prohibido. No tiene permiso para acceder a este recurso.';
          break;
        case 404:
          message = 'Recurso no encontrado.';
          break;
        case 500:
          message = 'Error del servidor. Por favor, inténtelo más tarde.';
          break;
        default:
          message = 'Ocurrió un error. Por favor, inténtelo de nuevo.';
      }
      return Promise.reject({ status, message, data: error.response.data });
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      return Promise.reject({ status: 0, message: 'No se recibió respuesta del servidor.', data: 'No response received' });
    } else {
      // Algo pasó al configurar la solicitud
      return Promise.reject({ status: -1, message: 'Error al configurar la solicitud.', data: error.message });
    }
  }
);

export default api;
