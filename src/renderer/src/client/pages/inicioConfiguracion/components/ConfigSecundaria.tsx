// ConfigSecundaria.tsx
import React, { FormEvent } from 'react';
import InputField from './InputFieldConfigSecundaria';
import { useIPValidation } from '../hooks/useIPValidation';

const ConfigSecundaria: React.FC = () => {
  const { ip, handleIpChange, error, setError } = useIPValidation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ip) {
      setError("La dirección IP no es válida.");
      return; // Detener la función si la IP no es válida
    }
    console.log("IP enviada:", ip);
    setError(""); // Clear errors after sending
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="col-8  bg-dos p-5 rounded shadow-sm" style={{ maxWidth: '750px' }} onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <InputField label="IP Servidor" value={ip} placeholder="Ejemplo: 192.168.1.1" onChange={handleIpChange} />
        <div className="text-center">
          <button type="submit" className="btn btn-primary col-6">Iniciar</button>
        </div>
      </form>
    </div>
  );
};

export default ConfigSecundaria;
