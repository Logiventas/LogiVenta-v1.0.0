import express from "express";

import getUserDataController from "../controllers/userManagmen/users/login/userDataContexts.controller";
import { getAllUsersController } from '../controllers/userManagmen/users/allUseres.controlller'; // Importa el controlador correctamente
import {getUserController} from '../controllers/userManagmen/users/getUser.controller'
import { authorize } from "../middlewares/authorize";
import {putUserController} from "../controllers/userManagmen/users/putUser.controller"

const router = express.Router();

// Define la ruta GET para '/allUsers'
router.get('/allUsers',authorize,getAllUsersController); // Usa el controlador
// Get all users
router.get('/user', getUserController); //
// Ruta POST para inicializar admin (o actualizar contraseña, según lo que hace `initAdmin`)
router.put('/user', putUserController);

router.get('/data', getUserDataController); // Ruta protegida para obtener datos del usuario

export default router;
