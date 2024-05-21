//src\renderer\src\client\pages\home\Home.tsx
import React, { useEffect, useContext, useState } from "react";
import Icono from '@client/pages/home/components/component_icono';
import SelecteUserContext from '@client/contexts/contexts';
import BarraUsuario from '@client/components/barraUsuario/component_barraUsuario';
import userContextController from '@client/controller/userConext.controller';

import img_gestionArchivo from '/assets/icon/gestionDeArchivo.png';
import img_gestionSistema from '/assets/icon/configuracionSistema.png';
import img_gestionCaja from '/assets/icon/gestionDeCaja.png';
import img_gestionUsuairo from '/assets/icon/gestionDeUsuario.png';
import img_gestionIventario from '/assets/icon/gestionInventario.png';
import img_registroVentas from '/assets/icon/resgistroDeVentas.png';
import img_gestionProveedores from '/assets/icon/gestionDeProveedores.png';



const Home: React.FC = () => {
  const { user, setUser } = useContext(SelecteUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await userContextController.fetchUserData();
        console.log('Fetched User Data:', userData);
        setUser(userData); // Actualiza el contexto con los datos del usuario
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BarraUsuario nombre={user.firstName} apellidos={user.surname} />
      <div className="container mt-5 p-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
        {user.acceso.gestionArchivo && <Icono enlace="/" modulo="Gestión de Archivo" urlImg={img_gestionArchivo} />}
        {user.acceso.gestionSistema && <Icono enlace="/" modulo="Configuración de Sistema" urlImg={img_gestionSistema} />}
        {user.acceso.gestionCaja && <Icono enlace="/" modulo="Gestión de Caja" urlImg={img_gestionCaja} />}
        {user.acceso.gestionUsuario && <Icono enlace="/" modulo="Gestión de Usuarios" urlImg={img_gestionUsuairo} />}
        {user.acceso.gestionInventario && <Icono enlace="/" modulo="Gestión de Inventario" urlImg={img_gestionIventario} />}
        {user.acceso.registroVentas && <Icono enlace="/" modulo="Registro de Ventas" urlImg={img_registroVentas} />}
        {user.acceso.gestionProveedores && <Icono enlace="/" modulo="Gestión de Proveedores" urlImg={img_gestionProveedores} />}
      </div>
    </>
  );
}

export default Home;
