//src\renderer\src\client\components\Toasts.component.tsx
import React, { useEffect, useState } from 'react';

interface StatusModalProps {
  message: string;
  success: boolean;
  onHide: () => void;
}

const Toasts: React.FC<StatusModalProps> = ({ message, success, onHide }) => {

  console.log(success)
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onHide(); // Llama a la función onHide cuando el modal se oculta
    }, 4000); // Duración del modal en milisegundos

    return () => clearTimeout(timer); // Limpieza del temporizador al desmontar o cambiar el estado
  }, [onHide]);

  if (!visible) {
    return null;
  }

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div id="liveToast" className={`toast show`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto"></strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setVisible(false)}></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Toasts;
