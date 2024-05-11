import api from '@client/utilities/api.utility';

// Response interceptor for handling responses globally
api.interceptors.response.use(response => response, error => {
    if (error.response) {
        const { status } = error.response;
        if (status === 404) {
            console.error('Recurso no encontrado:', error.config.url);
        } else if (status >= 500) {
            console.error('Error del servidor:', status);
        }
    } else {
        console.error('Error de red o no se recibió respuesta:', error.message);
    }
    return Promise.reject(error);
});
