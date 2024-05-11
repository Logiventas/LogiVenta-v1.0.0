// ConfigPrincipal.tsx
import React, { FormEvent } from 'react';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import InputField from './InputFieldConfigPrincipal';
import getData from '@client/services/initUserAdmin.service'

const ConfigPrincipal: React.FC = () => {
  const {
    contrasena,
    setContrasena,
    confirmarContrasena,
    setConfirmarContrasena,
    error,
    validarFormulario,
  } = usePasswordValidation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validarFormulario()) {
      window.electronAPI.startServer();  
      try {
        const data = await getData();
        console.log('Data received:', data);
    } catch (error) {
        console.error("Error while fetching data:", error);
    }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="col-12 bg-dos p-5 rounded shadow-sm" style={{ maxWidth: '750px' }}>
        <h3 className="mb-4 text-center">Configuración de Usuario Administrador</h3>
        <p>Ingresa la contraseña para el usuario administrador:</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <InputField label="Contraseña" type="password" value={contrasena} placeholder="Ingresa tu contraseña" onChange={e => setContrasena(e.target.value)} />
        <InputField label="Confirmar Contraseña" type="password" value={confirmarContrasena} placeholder="Confirma tu contraseña" onChange={e => setConfirmarContrasena(e.target.value)} />
        <div className="text-center">
          <button type="submit" className="btn btn-primary col-4">Iniciar</button>
        </div>

      </form>
    </div>
  );
};

export default ConfigPrincipal;
