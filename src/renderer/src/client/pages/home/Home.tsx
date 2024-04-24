import { useContext, useEffect, useState } from "react";
import Icono from './components/component_icono'
import myContexto from '../../contexts/contexts'
import BarraUsuario from "../../components/barraUsuario/component_barraUsuario";

function Home() {
  const data = useContext(myContexto)

  const acceso= useState(data.acceso)
  const [Notificacion, setNotificacion] = useState(data.notificacion.novista);

  useEffect(() => {
      setNotificacion(data.notificacion.novista)
  }, []);
  
  


  return (
    <>

      <BarraUsuario notificaciones={Notificacion} nombre={data.nombre} apellidos={data.apellidos} />
      <div className="container mt-5 p-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
        {acceso[0].gestionArchivo ? <Icono enlace="/" modulo="Gestión de Archivo" urlImg="src/assets/icon/gestionDeArchivo.png" /> : ''}
        {acceso[0].gestionSistema ? <Icono enlace="/" modulo="Configuración de Sistema" urlImg="src/assets/icon/configuracionSistema.png" /> : ''}
        {acceso[0].gestionCaja ? <Icono enlace="/" modulo="Gestión de Caja" urlImg="src/assets/icon/gestionDeCaja.png" /> : ''}
        {acceso[0].gestionUsuairo ? <Icono enlace="/" modulo="Gestión de Usuarios" urlImg="src/assets/icon/gestionDeUsuario.png" /> : ''}
        {acceso[0].gestionIventario ? <Icono enlace="/" modulo="Gestión de Inventario" urlImg="src/assets/icon/gestionInventario.png" /> : ''}
        {acceso[0].registroVentas ? <Icono enlace="/" modulo="Registro de Ventas" urlImg="src/assets/icon/resgistroDeVentas.png" /> : ''}
        {acceso[0].gestionProveedores ? <Icono enlace="/" modulo="Gestion de Proveedores" urlImg="src/assets/icon/gestionDeProveedores.png" /> : ''}
      </div>

    </>


  )
}

export default Home
