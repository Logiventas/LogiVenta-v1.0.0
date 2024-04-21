import { createContext } from 'react'

const SelecteUserContext = createContext({

  usuario: 'Thyago Lozada Guevara',
  key: '',
  nombre: '',
  apellidos: '',
  correo: '',
  cargo: '',
  permisos: {
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
