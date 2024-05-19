import express, { Request, Response } from "express";
import { initAdmin } from '../controllers/Admin/updatePassword.controller';
import authMiddleware from "../middlewares/authMiddleware";
import { getUserData } from "../controllers/Users/user.controller";

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/users', (_: Request, res: Response) => {
    res.send('Usuario');
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
router.get('/data', authMiddleware, getUserData);


export default router;
