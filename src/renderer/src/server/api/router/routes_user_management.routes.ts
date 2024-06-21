///src\renderer\src\server\api\router\routes_user_management.routes.ts
import express from "express";

import getUserDataController from "../controllers/userManagmen/users/login/userDataContexts.controller";
import { getAllUsersController } from '../controllers/userManagmen/users/allUseres.controlller'; // Importa el controlador correctamente
import {getUserController} from '../controllers/userManagmen/users/getUser.controller'
import { authorize } from "../middlewares/authorize";
import {putUserController} from "../controllers/userManagmen/users/putUser.controller"
import {postUserController} from "../controllers/userManagmen/users/postUser.controller"
import {getAllProfilesController} from "../controllers/userManagmen/profiles/getAllProfiles.controller"

const router = express.Router();

// Define la ruta GET para '/allUsers'
router.get('/allUsers',authorize,getAllUsersController); // Usa el controlador
// Get all users
router.get('/user', getUserController); //
// Ruta POST editar usaurio
router.put('/user', putUserController);
// Ruta POST crear usaurio
router.post('/user',postUserController);

router.get('/data', getUserDataController); // Ruta protegida para obtener datos del usuario

// Ruta GET para obtener todos los perfiles
router.get('/profile/allProfiles', getAllProfilesController);


export default router;
