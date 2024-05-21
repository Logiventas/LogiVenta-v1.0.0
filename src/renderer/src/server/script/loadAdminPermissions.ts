// src/scripts/loadAdminPermissions.ts
import { UserPermission } from "../api/models/UserPermission.model";

export async function loadAdminPermissions() {
    try {
        const existingPermissions = await UserPermission.findOne({ where: { userId: 1 } });
        if (!existingPermissions) {
            const adminPermissions = await UserPermission.create({
                id: 1,
                userId: 1,
                gestionArchivo: true,
                gestionSistema: true,
                gestionCaja: true,
                gestionUsuario: true,
                gestionInventario: true,
                gestionProveedores: true,
                registroVentas: true,
            });
            console.log("Permisos de administrador creados con éxito:", adminPermissions);
        } else {
            console.log("Los permisos ya existen, no se crearon nuevos.");
        }
        
    } catch (error) {
        console.error("Error al crear los permisos de administrador:", error);
    }
}
