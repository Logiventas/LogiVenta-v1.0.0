import api from '@client/interceptors/api.interceptor'

export const getUser = async (id: number): Promise<any> => {
    try {
        const response = await api.get(`/users/user?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};
