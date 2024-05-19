//src\renderer\src\client\interceptors\userConext.interceptor.ts
import api from './api.interceptor'

// Interceptor de peticiones
api.interceptors.request.use(
  (config) => {
    // Añadir lógica antes de enviar la petición, como añadir un token de autenticación si es necesario
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
api.interceptors.response.use(
  (response) => {
    // Lógica para manejar respuestas exitosas
    return response;
  },
  (error) => {
    // Manejo de errores global
    if (error.response) {
      // El servidor respondió con un estado diferente a 2xx
      console.error('Error en la respuesta del servidor:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        // Lógica para manejar errores de autenticación
        console.error('No autorizado. Redirigiendo a la página de inicio de sesión.');
        window.location.href = '/iniciarSesion';
      }
    } else if (error.request) {
      // La petición fue hecha pero no hubo respuesta
      console.error('No hubo respuesta del servidor:', error.request);
    } else {
      // Ocurrió un error al configurar la petición
      console.error('Error al configurar la petición:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
