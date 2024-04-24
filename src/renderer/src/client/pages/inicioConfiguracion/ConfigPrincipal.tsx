import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfigPrincipal = () => {
  const [usuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [_, setError] = useState('');

  const validarFormulario = () => {
    if (!usuario || !contrasena || !confirmarContrasena) {
      setError('Todos los campos son obligatorios');
      return false;
    }

    if (contrasena !== confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log('Formulario válido, enviar datos');
      // Aquí podrías enviar los datos a un servidor o realizar alguna acción
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <div className="d-flex  justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form  onSubmit={handleSubmit} className="col-8 bg-dos p-5 rounded shadow-sm" style={{ maxWidth: '750px' }}>
        <h3 className="mb-4 text-center">Configuración de Usuario</h3>


        <div className="mb-3 d-flex justify-content-center">
          <div className="w-50">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              className="form-control"
              type="password"
              id="contrasena"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4 d-flex justify-content-center">
          <div className="w-50">
            <label htmlFor="confirmarContrasena" className="form-label">Confirmar Contraseña</label>
            <input
              className="form-control"
              type="password"
              id="confirmarContrasena"
              placeholder="Confirma tu contraseña"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50">Iniciar</button>
        </div>
      </form>
    </div>
  );
}

export default ConfigPrincipal;
