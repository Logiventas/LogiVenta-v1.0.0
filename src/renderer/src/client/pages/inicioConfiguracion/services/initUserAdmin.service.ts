import AdminCredentials from '../models/adminCredentials';
import api from '@renderer/client/services/api.service';
import { responseInterceptor, errorInterceptor } from '@renderer/client/pages/inicioConfiguracion/interceptors/initUserAdmin.interceptor';
import bcrypt from 'bcryptjs';

api.interceptors.response.use(responseInterceptor, errorInterceptor);

const URL = '/usuario/admin/init';

const initializeAdmin = async (credentials: AdminCredentials) => {
    try {
        if (credentials.password !== credentials.confirmPassword) {
            throw new Error('Las contraseñas no coinciden');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(credentials.password, salt);

        const secureCredentials = {
            password: hashedPassword,
            confirmPassword: undefined  // No es necesario enviar la confirmación
        };

        const response = await api.post(URL, secureCredentials);
        console.log("Admin initialized successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error during admin initialization:', error);
        throw error;
    }
};

export default initializeAdmin;
