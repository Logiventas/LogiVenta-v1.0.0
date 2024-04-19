import { useState } from "react";
import Modulo from "./components/component_modulo";
import { useContext } from "react";
import myContexto from '../../contexts/contexts'

const Home = () => {
       const data = useContext(myContexto)
  
      const [acceso]= useState(data.permisos);

  return (
    <>
      <div className="container mt-5 p-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
      
          {acceso.gestionArchivo?<Modulo modulo="Gestión de Archivo" urlImg="/public/icon/gestionDeArchivo.png" />:''}
          {acceso.gestionSistema?<Modulo modulo="Configuración de Sistema" urlImg="/public/icon/configuracionSistema.png" />:''}
          {acceso.gestionCaja?<Modulo modulo="Gestión de Caja" urlImg="/public/icon/gestionDeCaja.png" />:''}
          {acceso.gestionUsuairo?<Modulo modulo="Gestión de Usuarios" urlImg="/public/icon/gestionDeUsuario.png" />:''}
          {acceso.gestionIventario?<Modulo modulo="Gestión de Inventario" urlImg="/public/icon/gestionInventario.png" />:''}
          {acceso.registroVentas?<Modulo modulo="Registro de Ventas" urlImg="/public/icon/resgistroDeVentas.png" />:''}
          {acceso.gestionProveedores? <Modulo modulo="Gestion de Proveedores" urlImg="/public/icon/gestionDeProveedores.png" />:''}
  
      </div>
    </>
  );
};

export default Home;
