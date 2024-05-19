import api from '../../../interceptors/api.interceptor';

api.interceptors.response.use(
  (response) => {
    // Aquí podrías extraer cookies de la respuesta si fuera necesario
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
      console.log('Cookies recibidas:', setCookieHeader);
      // Opcional: puedes hacer algo con las cookies aquí
    }
    return response;
  },
  (error) => {
    // Aquí puedes manejar errores de respuesta si es necesario
    return Promise.reject(error);
  }
);

export default api;
