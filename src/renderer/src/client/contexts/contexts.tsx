import { createContext } from 'react'

const SelecteUserContext = createContext({

  usuario: 'Usuario',
  key: '',
  nombre: 'Brayan',
  apellidos: 'Guevara Vanegas',
  correo: '',
  cargo: '',
  sexo: 'Femenino',
  notificacion:{
    novista:11
  },
  acceso: {
    gestionArchivo: true,
    gestionSistema: true,
    gestionCaja: true,
    gestionUsuairo: true,
    gestionIventario: true,
    gestionProveedores: true,
    registroVentas: true
  }

})

SelecteUserContext.displayName = 'DatosUsuario'
export default SelecteUserContext
