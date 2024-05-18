import express, { Request, Response } from "express";
import {loginController} from '../controllers/Session/login.controller'
const router = express.Router();

// Define la ruta GET para '/users'
router.get('/', (_: Request, res: Response) => {
    res.send('sesion');
});
router.post('/login', (req: Response, res: Response) => {loginController(req, res);});

export default router;
