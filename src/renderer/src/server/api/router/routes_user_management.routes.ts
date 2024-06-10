//src\renderer\src\server\api\router\routes_user_management.routes.ts
import express, { Request, Response } from "express";
import { initAdmin } from '../controllers/Admin/updatePassword.controller';
import getUserDataController  from "../controllers/Users/userData.controller";

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/allUsers', (_: Request, res: Response) => {
    res.json([
        {
            idUser: 1,
            identification: 12345678,
            firstName: "Juan",
            secondName: "Carlos",
            surname: "Pérez",
            secondSurname: "Gómez",
            email: "juan.perez@example.com",
            phone1: 5551234,
            profile: "Perfil2",
            job: "Administracion"
        },
        {
            idUser: 2,
            identification: 87654321,
            firstName: "Ana",
            secondName: "Luisa",
            surname: "Martínez",
            secondSurname: "Ramírez",
            email: "ana.martinez@example.com",
            phone1: 5552345,
            profile: "Perfil1",
            job: "Cajero"
        },
        // Agrega más usuarios si es necesario
    ]);
});

// Ruta POST para inicializar admin (o actualizar contraseña, según lo que hace `initAdmin`)
router.post('/admin/init', async (req: Request, res: Response) => {
    try {
        await initAdmin(req, res);
    } catch (error) {
        console.error('Error durante initAdmin:', error);
        res.status(500).send('Ocurrió un error interno del servidor');
    }
});


// Ruta protegida para obtener datos del usuario
router.get('/data', getUserDataController);


export default router;
