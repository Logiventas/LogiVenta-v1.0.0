import express, { Request, Response } from "express";
import { initAdmin } from '../controllers/Admin/updatePassword.controller';
import getUserDataController from "../controllers/Users/userDataContexts.controller";
import { getAllUsersController } from '../controllers/Users/allUseres.controlller'; // Importa el controlador correctamente
import {getUserController} from '../controllers/Users/getUser.controller'
import { authorize } from "../middlewares/authorize";
const router = express.Router();

// Define la ruta GET para '/allUsers'
router.get('/allUsers',authorize,getAllUsersController); // Usa el controlador
// Get all users
router.get('/user', getUserController); //
// Ruta POST para inicializar admin (o actualizar contraseña, según lo que hace `initAdmin`)
router.post('/admin/init', async (req: Request, res: Response) => {
    try {
        await initAdmin(req, res);
    } catch (error) {
        console.error('Error durante initAdmin:', error);
        res.status(500).send('Ocurrió un error interno del servidor');
    }
});

router.get('/data', getUserDataController); // Ruta protegida para obtener datos del usuario

export default router;
