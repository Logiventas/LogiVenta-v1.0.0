import express, { Request, Response } from "express";
// Importar rutas de las características específicas
import sesion from './routes_InicioSesion_Seguridad';
import caja from './routes_gestion_Caja';
import inventario from './routes_gestion_inventario';
import usuario from './routes_gestion_usuario'; // Corrección del nombre
import ventas from './routes_gestion_ventas';
import getServerIP from "../util/getServerIP"; // Utilidad para obtener la IP del servidor

const router = express.Router();

// Ruta para obtener la IP del servidor
router.get("/server", (_: Request, res: Response) => {
  try {
    let ip = getServerIP(); // Intenta obtener la IP del servidor
    res.send(ip); // Envía la IP como respuesta
  } catch (error) {
    res.status(500).send("Error al obtener la dirección IP del servidor");
  }
});

// Rutas para diferentes módulos de la aplicación
router.use('/sesion', sesion);
router.use('/caja', caja);
router.use('/inventario', inventario);
router.use('/usuario', usuario);
router.use('/ventas', ventas);

export default router;
