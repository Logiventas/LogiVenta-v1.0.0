import express, { Request, Response } from "express";

const router = express.Router();

// Define la ruta GET para '/users'
router.get('/', (_: Request, res: Response) => {
    res.send('inventario');
});

export default router;
