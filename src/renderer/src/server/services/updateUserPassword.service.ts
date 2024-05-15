// src/renderer/src/server/services/initialAdmin.service.ts
import { User } from '../api/models/user.model';  // Asegúrate de que la ruta al modelo es correcta

export const updateAdminPassword = async (password, userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            console.log('Usuario no encontrado');
            return null;  // Manejar cuando el usuario no existe
        }

        console.log(`Usuario encontrado: ${userId}, actualizando contraseña...`);
        user.set('password', password);
        await user.save();

        console.log(`Contraseña del usuario ${userId} actualizada con éxito`);
        return user;  // Devuelve el usuario actualizado
    } catch (error) {
        console.error(`Error al actualizar la contraseña del usuario ${userId}:`, error);
        throw error;  // Lanzar el error para manejarlo en el controlador
    }
};
