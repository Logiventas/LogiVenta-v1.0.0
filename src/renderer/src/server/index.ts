// src/renderer/src/server/app.ts
import express from "express";
import cors from 'cors';
import routes from "./api/router/routes";
import db from './config/db.config';
import cookieParser from "cookie-parser";

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api", routes);

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
