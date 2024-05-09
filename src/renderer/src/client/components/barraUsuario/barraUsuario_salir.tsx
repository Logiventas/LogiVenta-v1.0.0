import React, { useState } from 'react';
import Modal from '@client/components/component_modal';
import  icon_exit from '/src/assets/icon/exit.png'
const Salir: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (e) => {
    if(e.target.name=='true'){
        console.log('Cerrar sesion')
    }
    setIsOpen(false); // Cerrar modal después de aceptar
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
