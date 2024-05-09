import { useContext, useEffect, useState } from "react";
import Icono from '@client/pages/home/components/component_icono'
import myContexto from '@client/contexts/contexts'
import BarraUsuario from '@client/components/barraUsuario/component_barraUsuario';

import img_gestionArchivo from '/assets/icon/gestionDeArchivo.png';
import img_gestionSistema from '/assets/icon/configuracionSistema.png'
import img_gestionCaja from '/assets/icon/gestionDeCaja.png'
import img_gestionUsuairo from '/assets/icon/gestionDeUsuario.png'
import img_gestionIventario from '/assets/icon/gestionInventario.png'
import img_registroVentas from '/assets/icon/resgistroDeVentas.png'
import img_gestionProveedores from '/assets/icon/gestionDeProveedores.png'

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
        {acceso[0].gestionArchivo ? <Icono enlace="/" modulo="Gestión de Archivo" urlImg={img_gestionArchivo} /> : ''}
        {acceso[0].gestionSistema ? <Icono enlace="/" modulo="Configuración de Sistema" urlImg={img_gestionSistema} /> : ''}
        {acceso[0].gestionCaja ? <Icono enlace="/" modulo="Gestión de Caja" urlImg={img_gestionCaja} /> : ''}
        {acceso[0].gestionUsuairo ? <Icono enlace="/" modulo="Gestión de Usuarios" urlImg={img_gestionUsuairo} /> : ''}
        {acceso[0].gestionIventario ? <Icono enlace="/" modulo="Gestión de Inventario" urlImg={img_gestionIventario} /> : ''}
        {acceso[0].registroVentas ? <Icono enlace="/" modulo="Registro de Ventas" urlImg={img_registroVentas} /> : ''}
        {acceso[0].gestionProveedores ? <Icono enlace="/" modulo="Gestion de Proveedores" urlImg={img_gestionProveedores} /> : ''}
      </div>

    </>


  )
}

export default Home
