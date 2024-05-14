
//src\renderer\src\client\interceptors\api.interceptor.ts
import api from '@renderer/client/services/api.service';
import axios, { AxiosResponse, AxiosError } from 'axios';

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const config = error.config;
        // Asegurarse de que config no es undefined antes de proceder
        if (config && error.response && error.response.status >= 500) {
            // Verificar si la propiedad 'retryCount' existe, si no, inicializarla
            if (!config['retryCount']) {
                config['retryCount'] = 1;
            }
            // Verificar el número de reintentos
            if (config['retryCount'] < 3) {
                config['retryCount'] += 1;
                await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes de reintento
                return axios(config); // Reintenta la solicitud
            }
        }
        return Promise.reject(error); // Rechazar la promesa si no se cumple la condición para reintentar
    }
);

export default api;
