import service_login from '@client/pages/iniciarSesion/services/service_niciarSesion'
import service_validation from '@client/pages/iniciarSesion/services/service_validacion'

import datos from '@client/pages/iniciarSesion/models/inicioSesion'
const IniciarSesion = () => {
  console.log('iniciando sesion , Contraseña: ' + datos.contrasena + ' Usuario: ' + datos.usuario)

  console.log('validando tocken')

  const requesLogin = service_login(datos.usuario, datos.contrasena)

  // Rmplazar por adaptador de datos
  const tocken =requesLogin

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
