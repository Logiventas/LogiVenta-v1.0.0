import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@client/components/component_modal';
import icon_exit from '/src/assets/icon/exit.png';
import SelecteUserContext from '@client/contexts/contexts'; // Ajusta la ruta según tu estructura

const Salir: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(SelecteUserContext);

  const handleOnClick = (e) => {
    const action = e.target.getAttribute('data-action');
    if (action === 'accept') {
      // Reiniciar los datos del usuario
      setUser({
        idUser: "",
        firstName: "User",
        secondName: "",
        surname: "user",
        secondSurname: "",
        email: "",
        userName: "",
        acceso: {
          gestionArchivo: false,
          gestionSistema: false,
          gestionCaja: false,
          gestionUsuario: false,
          gestionInventario: false,
          gestionProveedores: false,
          registroVentas: false,
        
        }
      });
      navigate('/iniciarSesion'); // Redirigir a la página de inicio de sesión
    }
    setIsOpen(false); // Cerrar modal después de aceptar o cancelar
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleShowModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleShowModal} className="btn">
        <img style={{ width: "40px", height: "40px" }} src={icon_exit} alt="Salir" />
      </button>
      <Modal
        myOnclick={handleOnClick}
        onClose={handleClose}
        isOpen={isOpen}
        mensaje="¿Está seguro que quiere salir?"
        titulo="Salir"
      />
    </>
  );
};

export default Salir;
