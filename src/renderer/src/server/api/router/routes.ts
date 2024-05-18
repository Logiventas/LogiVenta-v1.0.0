import express, { Request, Response } from "express";


// Importar rutas de las características específicas
import sesion from './routes_sessions.routes';
import cash from './routes_cash_management.routes';
import inventory from './routes_inventory_management.routes';
import users from './routes_user_management.routes'; // Corrección del nombre
import sales from './routes_sales_management.routes';
import getServerIP from "../../util/getServerIP"; // Utilidad para obtener la IP del servidor

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
router.use('/session', sesion);
router.use('/cash', cash);
router.use('/inventory', inventory);
router.use('/users', users);
router.use('/sales', sales);

export default router;
