//src\renderer\src\client\components\barraUsuario\component_barraUsuario.tsx
import React, { useContext } from 'react';
import Salir from '@renderer/client/components/userBar/BtnExit.component';
import Atras from '@renderer/client/components/userBar/BtnReturn.component';
import SelecteUserContext from '@client/contexts/userContext';
import avatar from '/assets/img/usuario.png';

const BarraUsuario: React.FC = () => {
  const { user } = useContext(SelecteUserContext);

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
          <h4 className="m-0 ms-3">{`${user.firstName} ${user.surname}`}</h4>
        </div>
        <div className="d-flex align-items-center">
          <Salir />
        </div>
      </div>
    </nav>
  );
};

export default BarraUsuario;
