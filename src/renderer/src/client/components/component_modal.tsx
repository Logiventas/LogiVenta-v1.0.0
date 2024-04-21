import React from 'react';

interface ModalProps {
  mensaje: string;
  titulo: string;
  onClose: () => void;
  isOpen: boolean;
  myOnclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ mensaje, titulo, onClose, isOpen, myOnclick }) => {
  const modalClass = isOpen ? "modal fade show" : "modal fade";

  return (
    <>
      <div className={modalClass } style={isOpen ? { display: "block" } : { display: "none" }} aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
        <div style={{ translate: '0 20vh' }} className="  modal-dialog">
          <div style={{
            backgroundColor: 'var(--color-primary-red)',
            width: '30rem',
            minHeight: '15rem'
          }} className="modal-content ">

            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>

            <div className="modal-body">{mensaje}</div>
            
            <div className="modal-footer">
              <button name='false' type="button" className="btn btn-secondary" onClick={myOnclick}>Cancelar</button>
              <button name='true'type="button" className="btn btn-primary" onClick={myOnclick}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
