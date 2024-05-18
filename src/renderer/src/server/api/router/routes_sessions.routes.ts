import express, { Request, Response } from "express";

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/', (_: Request, res: Response) => {
    res.send('sesion');
});
router.post('/login', (_: Response, res: Response) => {
    console.log('Este es mi servidor ')
})

export default router;
