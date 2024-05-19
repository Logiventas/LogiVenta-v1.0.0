import express from "express";
import cors from 'cors';  // Usando import en lugar de require para CORS
import routes from "./api/router/routes";
import db from './config/db.config';  // Importa la configuración de Sequelize

// Configura CORS para permitir solicitudes de un origen específico
const corsOptions = {
  origin: 'http://localhost:5173',  // Asegúrate de cambiar esto por tu origen específico si es diferente
  credentials: true, // Permite enviar cookies
};

const app = express(); // Instancia de la aplicación Express

// Middleware para parsear JSON utilizando la funcionalidad incorporada de Express
app.use(express.json());

// Configuración de CORS
app.use(cors(corsOptions));

// Definir un controlador para la ruta principal
app.use("/api", routes);

const port = 8080; // Puerto desde la configuración

// Función para iniciar el servidor
function startServer(): boolean {
    // Iniciar la conexión a la base de datos y sincronizar modelos antes de iniciar el servidor
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
    
    return true; // Esto podría considerarse redundante o podría ajustarse según la lógica de manejo de errores
}

export default startServer; // Exportar la función para iniciar el servidor
