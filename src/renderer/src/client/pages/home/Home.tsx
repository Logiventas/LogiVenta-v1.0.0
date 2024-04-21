import { useState, useContext } from 'react'
import Icono from './components/component_icono'
import myContexto from '../../contexts/contexts'
import BarraUsuario from "../../components/barraUsuario/component_barraUsuario";

function Home() {
  const data = useContext(myContexto)

  const [acceso] = useState(data.permisos)

  return (
    <>

      <BarraUsuario usuario="Brayan"/>
      <div className="container mt-5 p-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>

        {acceso.gestionArchivo ? <Icono enlace="/" modulo="Gestión de Archivo" urlImg="src/assets/icon/gestionDeArchivo.png" /> : ''}
        {acceso.gestionSistema ? <Icono enlace="/" modulo="Configuración de Sistema" urlImg="src/assets/icon/configuracionSistema.png" /> : ''}
        {acceso.gestionCaja ? <Icono enlace="/" modulo="Gestión de Caja" urlImg="src/assets/icon/gestionDeCaja.png" /> : ''}
        {acceso.gestionUsuairo ? <Icono enlace="/" modulo="Gestión de Usuarios" urlImg="src/assets/icon/gestionDeUsuario.png" /> : ''}
        {acceso.gestionIventario ? <Icono enlace="/" modulo="Gestión de Inventario" urlImg="src/assets/icon/gestionInventario.png" /> : ''}
        {acceso.registroVentas ? <Icono enlace="/" modulo="Registro de Ventas" urlImg="src/assets/icon/resgistroDeVentas.png" /> : ''}
        {acceso.gestionProveedores ? <Icono enlace="/" modulo="Gestion de Proveedores" urlImg="src/assets/icon/gestionDeProveedores.png" /> : ''}

      </div>

    </>


  )
}

export default Home
