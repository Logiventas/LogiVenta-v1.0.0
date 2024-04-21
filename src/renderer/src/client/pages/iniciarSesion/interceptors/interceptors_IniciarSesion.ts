import serviceIniciarSesion from "../services/service_iniciarSesion";
import serviceValidacion from "../services/service_validacion";
import {usuario} from "../models/model_usuario"; // Asumiendo que 'datos' es un módulo exportado adecuadamente
// Tipado explícito para la función y su valor de retorno
export const iniciarSesion = (): boolean => {
  // Llamada al servicio de inicio de sesión con manejo del tipo de retorno
  const requestLogin = serviceIniciarSesion(usuario);

  // Verificación del token: No es necesario usar una variable intermedia
  return requestLogin !== false && serviceValidacion(requestLogin);
}