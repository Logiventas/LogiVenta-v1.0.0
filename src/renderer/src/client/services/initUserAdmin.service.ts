import axios from 'axios';
import api from '@renderer/client/utilities/api.utility';

const getData = async () => {
    try {
        const response = await api.get('/server');
        console.log("Data fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Verifica si el error es una instancia de AxiosError
            if (!error.response) {
                // Error de red o solicitud bloqueada por configuraciones (CSP, CORS, etc.)
                console.error('Error de red o sin respuesta:', error.message);
            } else {
                // Respuestas de error HTTP desde el servidor
                console.error('Error fetching data:', error.response.status, error.response.data);
            }
        } else {
            // Errores que no son de Axios
            console.error('Error inesperado:', error);
        }
        throw error;
    }
};

export default getData;
