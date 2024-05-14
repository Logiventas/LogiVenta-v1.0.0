import express, { Request, Response } from "express";

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/', (_: Request, res: Response) => {
    res.send('usuario');
});
router.post('/admin/init', (req: Request, res: Response) => {
    console.log("Datos recibidos:", req.body);
    res.status(200).send(true)
});

export default router;
