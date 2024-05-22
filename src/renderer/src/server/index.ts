// src/renderer/src/server/app.ts
import express from "express";
import cors from 'cors';
import routes from "./api/router/routes";
import db from './config/db.config';
import cookieParser from "cookie-parser";
import getServerIP from "./utils/getServerIP"; // Utilidad para obtener la IP del servidor
import helmet from "helmet";
import { loadAdminUser } from "./script/loadAdminUser";
import { loadAdminPermissions } from "./script/loadAdminPermissions";

const corsOptions = {
  origin: true,
  credentials: true,
};

const app = express();
// deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Ruta para obtener la IP del servidor
app.get("/server", async (_, res) => {
    try {
        const ip = getServerIP(); // Suponiendo que esta función está definida
        res.send(ip);
    } catch (error) {
        res.status(500).send("Error al obtener la dirección IP del servidor");
    }
});

app.use("/api", routes);

const port = 8080;

async function startServer() {
    try {
        await db.authenticate();
        console.log('Conexión a la base de datos establecida con éxito.');
        await db.sync();
        console.log('Modelos sincronizados.');

        // Cargar usuario administrador
        const adminUser = await loadAdminUser();
        
        // Cargar permisos del usuario administrador
        if (adminUser) {
            await loadAdminPermissions();
        }

        app.listen(port, () => {
            console.log(`API escuchando en el puerto ${port}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    };
};

export default startServer;
