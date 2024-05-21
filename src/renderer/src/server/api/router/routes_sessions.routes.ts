//src\renderer\src\server\api\router\routes_sessions.routes.ts
import express, { Request, Response } from "express";
import {loginController} from '../controllers/Session/login.controller';
import { verifyTokenController } from '../controllers/Session/verifyToken.controller';
import { authenticateJWT } from '../middlewares/autthenticateJWT';

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/', (_: Request, res: Response) => {
    res.send('sesion');
});
router.post('/login', (req: Response, res: Response) => {loginController(req, res);});
router.get('/verify-token', authenticateJWT, (req: Request, res: Response) => { verifyTokenController(req, res); });

export default router;
