import axios from "axios";
import config from "../../config.json"; // Asegúrate de que server.json contiene "PORT" y "HOST"
import getLocalIPs from "./getLocalIPs";

const PORT = config.PORT_SERVER;

// Función para determinar si una dirección IP es IPv6
const isIPv6 = (ip: string): boolean => ip.includes(":");

// Función para formatear la URL correctamente dependiendo del tipo de IP
const formatURL = (ip: string, port: number): string => {
  return `http://${isIPv6(ip) ? `[${ip}]` : ip}:${port}/api/server`;
};

// Función asíncrona para verificar si una IP es accesible
async function verificarIP(ip: string): Promise<string | false> {
  const url = formatURL(ip, PORT);
  try {
    // Realizar una petición GET para verificar la conexión
    await axios.get(url);
    return ip; // Retorna la IP si la conexión es exitosa
  } catch (error) {
    console.error('Fallo al conectar con IP:', ip, 'Error:');
    return false; // Retorna false si hay un error de conexión
  }
}

// Función para buscar el servidor en todas las IPs locales
async function buscarIpServidor(IPServer): Promise<string | false> {
  const IPs:any = await getLocalIPs();
  IPs.push(IPServer); // Añade el HOST configurado como una opción adicional
  for (const ip of IPs) {
    const result = await verificarIP(ip);
    if (result !== false) {
      console.log('IP del servidor encontrada:', result);
      return result; // Retorna la IP del servidor encontrado
    }
  }
  console.log('No se encontro conexion con ningun servidor.');
  return false; // Si no se encuentra ninguna conexión exitosa, retorna false
}

export default buscarIpServidor;
