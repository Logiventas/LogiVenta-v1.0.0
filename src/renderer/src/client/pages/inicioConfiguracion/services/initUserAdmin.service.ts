//src\renderer\src\client\pages\inicioConfiguracion\services\initUserAdmin.service.ts
import AdminCredentials from '../models/adminCredentials';
import api from '../interceptors/initUserAdmin.interceptor';
import bcrypt from 'bcryptjs';

const URL = '/users/admin/init';

const initializeAdmin = async (credentials: AdminCredentials) => {
    try {
        if (credentials.password !== credentials.confirmPassword) {
            throw new Error('Las contraseñas no coinciden');
        }
        if (credentials.password.length < 8) {
            throw new Error('La contraseña debe tener al menos 8 caracteres');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(credentials.password, salt);

        const secureCredentials = {
            password: hashedPassword
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
