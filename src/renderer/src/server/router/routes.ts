import express, { Request, Response } from "express";

const router = express.Router();


import getServerIP from "../util/getServerIP";

// Definir un controlador para la ruta principal
router.get("/server", (_: Request, res: Response) => {
  let ip = getServerIP(); // Obtener la IP del servidor
  res.send(ip); // Responder con la IP obtenida
});

import sesion  from './routes_InicioSesion_Seguridad'
import caja from './routes_gestion_Caja'
import inventario from './routes_gestion_inventario'
import usuairio from './routes_gestion_usuario'
import ventas from './routes_gestion_ventas'

router.use('/sesion',sesion)
router.use('/caja',caja)
router.use('/inventario',inventario)
router.use('/usuario',usuairio)
router.use('/ventas',ventas)

export default router