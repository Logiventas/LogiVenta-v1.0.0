// controllers/adminController.js
// controllers/adminController.js
import { updateAdminPassword } from '../../../services/updateUserPassword.service'; // Ajuste del path según estructura estándar

export const initAdmin = async (req, res) => {
    console.log("Datos recibidos:", req.body);
    const { password } = req.body;

    // Validación de entrada para asegurarse de que la contraseña no esté vacía
    if (!password) {
        return res.status(400).json({ error: "La contraseña no puede estar vacía." });
    }

    try {
        const results = await updateAdminPassword(password, 1); // Asumiendo '1' es el ID del admin
        // Asumiendo que 'results' pueda contener información útil sobre la operación realizada
        if (results) {
            res.status(200).json({ message: "Contraseña actualizada correctamente.", adminId: 1 }); // Envía el ID del admin para confirmar
        } else {
            // Manejar el caso donde no hay errores, pero la actualización no se realiza
            res.status(404).json({ error: "Administrador no encontrado." });
        }
    } catch (error) {
        console.error('Error al actualizar la contraseña del administrador:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
