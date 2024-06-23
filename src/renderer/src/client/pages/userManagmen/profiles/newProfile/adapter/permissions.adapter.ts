import { getAllPermissions } from '../services/getAllPermissions.service';
import { Permission } from '../models/permission.model';

export const getPermissions = async (): Promise<Permission[]> => {
    try {
        const userData = await getAllPermissions();
        const data = userData.data;

        let permissions: Permission[] = [];
        data.forEach((permission: any) => {
            permissions.push({
                id: permission.id,
                name: permission.name,
                description: permission.description,
                state: false
            });
        });
        console.log('DATOS DE PERMISOS: ', permissions);
        return permissions;

    } catch (error) {
        console.error('Error al obtener los datos de permisos:', error);
        throw error;
    }
};
