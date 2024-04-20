import service_login from '../services/service_niciarSesion'
import service_validation from '../services/service_validacion'

import datos from '../models/inicioSesion'
const IniciarSesion = () => {
  console.log('iniciando sesion , Contraseña: ' + datos.contrasena + ' Usuario: ' + datos.usuario)

  console.log('validando tocken')

  const requesLogin = service_login(datos.usuario, datos.contrasena)

  // Rmplazar por adaptador de datos
  const tocken = requesLogin == false ? false : 'brianKro'

  // validar tocken

  const validacion = service_validation(tocken)

  if (validacion) {
    console.log('token seguro,redirgir a Home')
    return true
  } else {
    console.log('token no seguro')
    return false
  }
}

export default IniciarSesion
