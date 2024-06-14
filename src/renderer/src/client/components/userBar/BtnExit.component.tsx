import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@renderer/client/components/Modal.component';
import icon_exit from '/src/assets/icon/exit.png';
import SelecteUserContext from '@client/contexts/userContext'; // Ajusta la ruta según tu estructura

const BtnExit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(SelecteUserContext);

  const handleOnClick = (e) => {
    const action = e.target.getAttribute('data-action');
    if (action === 'accept') {
      // Reiniciar los datos del usuario
      setUser({
        idUser:0,
        firstName: "User",
        secondName: "",
        surname: "user",
        secondSurname: "",
        userName: "",
        access: {
          'CS00-00': false,
          'CS01-00': false,
          'CS01-01': false,
          'CS01-02': false,
          'CS01-03': false,
          'CS01-04': false,
          'CS02-00': false,
          'CS03-00': false,
          'CS04-00': false,
          'CS04-01': false,
          'CS04-02': false,
          'CS04-03': false,
          'CS04-04': false,
          'CS05-00': false,
          'GA00-00': false,
          'GA01-00': false,
          'GA02-00': false,
          'GC00-00': false,
          'GC01-00': false,
          'GC02-00': false,
          'GC03-00': false,
          'GC04-00': false,
          'GC05-00': false,
          'GC06-00': false,
          'GC07-00': false,
          'GI00-00': false,
          'GI01-00': false,
          'GI02-00': false,
          'GI03-00': false,
          'GI04-00': false,
          'GI05-00': false,
          'GI06-00': false,
          'GI07-00': false,
          'GP00-00': false,
          'GU00-00': false,
          'GU01-00': false,
          'GU01-01': false,
          'GU01-02': false,
          'GU01-03': false,
          'GU01-04': false,
          'GU02-00': false,
          'GU02-01': false,
          'GU02-02': false,
          'GU02-03': false,
          'GU03-00': false,
          'GU03-01': false,
          'GU03-02': false,
          'GU03-03': false,
          'I000-00': false,
          'RV00-00': false,
      
      
        }
      });
      navigate('/LogIn'); // Redirigir a la página de inicio de sesión
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

export default BtnExit;
