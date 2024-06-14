// src/renderer/src/server/app.ts
import express from "express";
import cors from "cors";
import routes from "./api/router/routes";
import db from "./config/db.config";
import cookieParser from "cookie-parser";
import getServerIP from "./utils/getServerIP"; // Utilidad para obtener la IP del servidor
import initializeDatabase from "./script/index";


/*
const whilelist = ["http://localhost:*"];
const corsOptions = {
  origin: function(origin,callback){
    if(whilelist.indexOf(origin) === -1){
        callback(null,true);
  
  }else{
    callback(new Error('Not allowed by CORS'))
  }
}
}*/

const corsOptions = {
  origin: true,
  credentials: true,
};
const app = express();


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
    // Verifica la conexión a la base de datos
    await db.authenticate();
    console.log("Conexión a la base de datos establecida con éxito.");

    // Sincroniza la base de datos con los modelos
    const baseDatos=await db.sync({ force: false });
    if(baseDatos){
        console.log("Modelos sincronizados y base de datos creada.");
        const dbInitialized = await initializeDatabase();
        
    if (!dbInitialized) {
        console.error("Error al inicializar la base de datos");
        return;
      }
  
    }
   

    // Inicializa la base de datos cargando datos en secuencia


    app.listen(port, () => {
      console.log(`API escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

export default startServer;
