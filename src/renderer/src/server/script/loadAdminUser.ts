//src\renderer\src\server\script\loadAdminUser.ts
// src/renderer/src/server/script/loadAdminUser.ts
import sequelize from "../config/db.config";
import { User } from "../api/models/user.model";
import bcrypt from 'bcryptjs';

export async function loadAdminUser() {
    try {
        // Sincroniza la base de datos, asegurando que todos los modelos están actualizados.
        await sequelize.sync();

        // Comprueba si ya existe un usuario administrador
        const existingUser = await User.findOne({
            where: { email: "admin@example.com" }
        });

        if (existingUser) {
            console.log("Un usuario administrador ya existe.");
            return existingUser; // Retorna el usuario existente o lanza un error según lo desees.
        }

        // Hashea la contraseña antes de almacenarla en la base de datos
        // deepcode ignore HardcodedNonCryptoSecret: <please specify a reason of ignoring this>, deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
        const hashedPassword = await bcrypt.hash("admin123", 10);

        // Crea el usuario administrador
        const adminUser = await User.create({
            firstName: "Admin",
            surname: "User",
            email: "admin@example.com",
            userName: "admin",
            password: hashedPassword,
            active: true,
        });

        console.log("Usuario administrador creado con éxito:", adminUser);
        return adminUser;
    } catch (error) {
        console.error("Error al crear el usuario administrador:", error);
        throw new Error("Error al crear el usuario administrador"); // Lanza el error para que pueda ser manejado por el llamador
    } finally {
        // Cierra la conexión a la base de datos si es necesario
        // await sequelize.close(); // Descomenta si necesitas cerrar la conexión manualmente
    }
}
