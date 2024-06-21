// src/renderer/src/server/api/router/routes.ts
import express from "express";

// Importar rutas de las características específicas
import sesion from './routes_sessions.routes';
import cash from './routes_cash_management.routes';
import inventory from './routes_inventory_management.routes';
import users from './routes_user_management.routes'; // Corrección del nombre
import sales from './routes_sales_management.routes';
import { authenticateJWT } from "../middlewares/autthenticateJWT";


const router = express.Router();

// Rutas para diferentes módulos de la aplicación
router.use('/session', sesion);
router.use('/cash', authenticateJWT, cash);
router.use('/inventory', authenticateJWT, inventory);
router.use('/users', authenticateJWT, users);
router.use('/sales', authenticateJWT, sales);

export default router;
