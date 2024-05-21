// src/renderer/src/server/api/router/routes.ts
import express from "express";

// Importar rutas de las características específicas
import sesion from './routes_sessions.routes';
import cash from './routes_cash_management.routes';
import inventory from './routes_inventory_management.routes';
import users from './routes_user_management.routes'; // Corrección del nombre
import sales from './routes_sales_management.routes';
import { authenticateJWT } from "../middlewares/autthenticateJWT";
import csrfProtection from "../middlewares/csrfProtection";

const router = express.Router();

// Rutas para diferentes módulos de la aplicación
router.use('/session', sesion);
router.use('/cash', authenticateJWT, csrfProtection, cash);
router.use('/inventory', authenticateJWT, csrfProtection, inventory);
router.use('/users', authenticateJWT, csrfProtection, users);
router.use('/sales', authenticateJWT, csrfProtection, sales);

export default router;
