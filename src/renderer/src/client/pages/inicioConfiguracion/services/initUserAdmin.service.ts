// src/renderer/src/client/pages/inicioConfiguracion/services/initUserAdmin.service.ts
import AdminCredentials from '../models/adminCredentials'
import api from '@renderer/client/services/api.service';
import { responseInterceptor, errorInterceptor } from '@renderer/client/pages/inicioConfiguracion/interceptors/initUserAdmin.interceptor';
// Añadir interceptores específicos para esta instancia
api.interceptors.response.use(responseInterceptor, errorInterceptor);

const URL = '/usuario/admin/init'

// Función para enviar datos de inicialización del administrador
const initializeAdmin = async (credentials: AdminCredentials) => {
    try {
        const response = await api.post(URL, credentials);
        console.log("Admin initialized successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error during admin initialization:', error);
        throw error;
    }
};

export default initializeAdmin;
