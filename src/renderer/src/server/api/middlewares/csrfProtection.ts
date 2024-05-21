// src/renderer/src/server/api/middlewares/csrfProtection.ts
import csurf from "csurf";

// Configurar el middleware de csurf
const csrfProtection = csurf({ cookie: true });

export default csrfProtection;
