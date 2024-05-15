// hooks/usePasswordValidation.ts
import { useState } from 'react';

export const usePasswordValidation = () => {
  const [contrasena, setContrasena] = useState<string>('');
  const [confirmarContrasena, setConfirmarContrasena] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validarFormulario = (): boolean => {
    if (!contrasena || !confirmarContrasena) {
      setError('Todos los campos son obligatorios');
      return false;
    }

    if (contrasena.length < 9) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return false;
    }

    if (contrasena !== confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return false;
    }

    setError('');
    return true;
  };

  return {
    contrasena,
    setContrasena,
    confirmarContrasena,
    setConfirmarContrasena,
    error,
    validarFormulario,
  };
};
