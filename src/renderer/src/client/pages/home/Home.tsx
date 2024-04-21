import { useState, useContext } from 'react'
import Modulo from './components/component_modulo'
import {TituloModulo} from '../../components/tituloModulo'
import myContexto from '../../components/contexts/contexts'

const Home = () => {
  const data = useContext(myContexto)

  const [acceso] = useState(data.permisos)

  return (
    <>
      <div className="container mt-5 p-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>

          {acceso.gestionArchivo ? <Modulo modulo="Gestión de Archivo" urlImg="src/assets/icon/gestionDeArchivo.png" /> : ''}
          {acceso.gestionSistema ? <Modulo modulo="Configuración de Sistema" urlImg="src/assets/icon/configuracionSistema.png" /> : ''}
          {acceso.gestionCaja ? <Modulo modulo="Gestión de Caja" urlImg="src/assets/icon/gestionDeCaja.png" /> : ''}
          {acceso.gestionUsuairo ? <Modulo modulo="Gestión de Usuarios" urlImg="src/assets/icon/gestionDeUsuario.png" /> : ''}
          {acceso.gestionIventario ? <Modulo modulo="Gestión de Inventario" urlImg="src/assets/icon/gestionInventario.png" /> : ''}
          {acceso.registroVentas ? <Modulo modulo="Registro de Ventas" urlImg="src/assets/icon/resgistroDeVentas.png" /> : ''}
          {acceso.gestionProveedores ? <Modulo modulo="Gestion de Proveedores" urlImg="src/assets/icon/gestionDeProveedores.png" /> : ''}

      </div>
    </>
  )
}

export default Home
