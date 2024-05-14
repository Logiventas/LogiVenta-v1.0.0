const cors = require('cors');
import express from "express";
import routes from "./router/routes";
// Configura CORS para permitir solicitudes de un origen específico
const corsOptions = {
  origin: 'http://localhost:5173',  // Asegúrate de cambiar esto por tu origen específico si es diferente
};
const app = express(); // Instancia de la aplicación Express
// Middleware para parsear JSON utilizando la funcionalidad incorporada de Express
app.use(express.json());



const port = 8080; // Puerto desde la configuración
app.use(cors(corsOptions));
// Definir un controlador para la ruta principal

app.use("/api", routes);

// Función para iniciar el servidor
function startServer():boolean {
    app.listen(port, () => {
      console.log(`API escuchando en el puerto ${port}`);
    });

    return true
}

export default startServer; // Exportar la función para iniciar el servidor
