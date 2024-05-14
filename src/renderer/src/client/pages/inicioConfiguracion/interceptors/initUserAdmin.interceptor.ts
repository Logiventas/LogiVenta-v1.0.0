// src/renderer/src/client/interceptors/initUserAdminInterceptor.ts
import { AxiosError, AxiosResponse } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
    // Aquí podrías manejar respuestas específicas
    return response;
};

export const errorInterceptor = (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
        console.error('Authentication error:', error.response.status);
    } else if (error.response && error.response.status >= 500) {
        console.error('Server error:', error.response.status);
    }
    return Promise.reject(error);
};
