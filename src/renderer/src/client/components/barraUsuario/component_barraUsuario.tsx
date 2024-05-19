//src\renderer\src\client\components\barraUsuario\component_barraUsuario.tsx
import React from 'react';
import Salir from '@client/components/barraUsuario/barraUsuario_salir';
import Atras from '@client/components/barraUsuario/barraUsuario_atras';
import avatar from '/assets/img/usuario.png';


interface BarraUsuarioProps {
  nombre: string;
  apellidos: string;
}

const BarraUsuario: React.FC<BarraUsuarioProps> = ({ nombre, apellidos }) => {
  console.log('BarraUsuario Props:', nombre, apellidos); // Añadir log para verificar las props
  return (
    <nav
      style={{ backgroundColor: "var(--color-primary-light)" }}
      className="navbar navbar-expand-lg navbar-light"
    >
      <div className="w-100 mx-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Atras />
          <img
            style={{ width: "40px", height: "40px" }}
            className="mr-2"
            src={avatar}
            alt="Avatar"
          />
          <h4 className="m-0 ms-3">{nombre + ' ' + apellidos}</h4>
        </div>
        <div className="d-flex align-items-center">
          <Salir />
        </div>
      </div>
    </nav>
  );
};

export default BarraUsuario;
