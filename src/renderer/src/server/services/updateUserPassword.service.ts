// src/renderer/src/server/services/initialAdmin.service.ts
import Account from '../models/Account.model';  // Asegúrate de que la ruta al modelo es correcta
import bcrypt from 'bcryptjs';

export const updateAdminPassword = async (password: string, accountId: number) => {
    try {
        const account = await Account.findByPk(accountId);
        if (!account) {
            console.log('Cuenta no encontrada');
            return null;  // Manejar cuando la cuenta no existe
        }

        console.log(`Cuenta encontrada: ${accountId}, actualizando contraseña...`);

        // Hashear la nueva contraseña antes de guardarla
        // deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
        const hashedPassword = await bcrypt.hash(password, 10);
        account.set('password', hashedPassword);
        await account.save();

        console.log(`Contraseña de la cuenta ${accountId} actualizada con éxito`);
        return account;  // Devuelve la cuenta actualizada
    } catch (error) {
        console.error(`Error al actualizar la contraseña de la cuenta ${accountId}:`, error);
        throw error;  // Lanzar el error para manejarlo en el controlador
    }
};
