///src\renderer\src\server\api\router\routes_user_management.routes.ts
import express from "express";

import getUserDataController from "../controllers/userManagmen/users/login/userDataContexts.controller";
import { getAllUsersController } from '../controllers/userManagmen/users/allUseres.controlller'; // Importa el controlador correctamente
import {getUserController} from '../controllers/userManagmen/users/getUser.controller'
import { authorize } from "../middlewares/authorize";
import {putUserController} from "../controllers/userManagmen/users/putUser.controller"
import {postUserController} from "../controllers/userManagmen/users/postUser.controller"
import {getAllProfilesController} from "../controllers/userManagmen/profiles/getAllProfiles.controller"
import {getAllPermissionsController} from "../controllers/userManagmen/profiles/security/allPermissions.controller"
import {newProfileController} from "../controllers/userManagmen/profiles/newProfile.constroller"
import {getProfileController} from '../controllers/userManagmen/profiles/getProfile.controller'
import {editProfileController} from '../controllers/userManagmen/profiles/editProfile.controller'
import {deleteProfileController} from '../controllers/userManagmen/profiles/deleteProfile.constroller'


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

// Ruta GET para obtener todos los Permisos
router.get('/profile/allPermissions',getAllPermissionsController);

// Ruta POST para crear nuevo Perfil
router.post('/profile/newProfile',newProfileController)

router.get('/profile/:id',getProfileController)

router.put('/profile/editProfile',editProfileController)

router.delete('/profile/deleteProfile',deleteProfileController)


export default router;
