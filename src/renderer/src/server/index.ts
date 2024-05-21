// src/renderer/src/server/app.ts
import express from "express";
import cors from 'cors';
import routes from "./api/router/routes";
import db from './config/db.config';
import cookieParser from "cookie-parser";
import getServerIP from "./utils/getServerIP"; // Utilidad para obtener la IP del servidor
import helmet from "helmet";

const corsOptions = {
  origin: 'http://*:*',
  credentials: true,
};

// deepcode ignore UseCsurfForExpress: <please specify a reason of ignoring this>
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// Ruta para obtener la IP del servidor
app.get("/server", (_: Request, res) => {
  try {
    const ip = getServerIP(); // Intenta obtener la IP del servidor
    res.send(ip); // Envía la IP como respuesta
  } catch (error) {
    res.status(500).send("Error al obtener la dirección IP del servidor");
  }
});

app.use("/api",routes);

const port = 8080;

function startServer(): boolean {
  db.authenticate().then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
    db.sync().then(() => {
      console.log('Modelos sincronizados.');
      app.listen(port, () => {
        console.log(`API escuchando en el puerto ${port}`);
      });
    }).catch((syncError) => {
      console.error('Error al sincronizar modelos:', syncError);
    });
  }).catch((connectionError) => {
    console.error('Error al conectar con la base de datos:', connectionError);
  });

  return true;
}

export default startServer;
