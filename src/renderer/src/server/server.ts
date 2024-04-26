import express, { Request, Response } from "express";
import getServerIP from "./util/getServerIP";
import Config from "./config/server.json"; // Configuración del servidor
import configuracionInicial from "../config.json"; // Configuración inicial
import buscarIpServidor from "./util/buscarIpServidor"; // Verificación de IP

const app = express(); // Instancia de la aplicación Express
const port = Config.PORT; // Puerto desde la configuración

// Función para iniciar la configuración y buscar un servidor
async function iniciarConfiguracion(IPServer:string): Promise<string | false> {
  const resultado = await buscarIpServidor(IPServer);
  if (resultado !== false) {
    console.log(`Servidor encontrado en la IP: ${resultado}`);
    return resultado;
  } else {
    console.log("No se encontró ningún servidor. Se requiere intervención manual.");
    return false;
  }
}

// Definir un controlador para la ruta principal
app.get("/", (_: Request, res: Response) => {
  let ip = getServerIP(); // Obtener la IP del servidor
  // Para obtener la IP real si estás detrás de un proxy
  // ip = req.headers['x-forwarded-for'] || req.ip;
  res.send(ip); // Responder con la IP obtenida
});

// Función para iniciar el servidor
async function startServer(IPServer:string): Promise<string | false> {
  console.log(`Leer configuracion del servidor: ${configuracionInicial.server}`);

  if (configuracionInicial.server==true) {
    console.log("Iniciando servidor");
    app.listen(port, () => {
      console.log(`API escuchando en el puerto ${port}`);
    });
    return "Servidor iniciado con exito.";
  } else {
    console.log("Servidor deshabilitado. Buscando dirección IP del servidor...");
    try {
      const respuesta = await iniciarConfiguracion(IPServer);
      return respuesta;
    } catch (error) {
      console.error("Error al obtener la IP del servidor:", error);
      return false;
    }
  }
}

export default startServer; // Exportar la función para iniciar el servidor
