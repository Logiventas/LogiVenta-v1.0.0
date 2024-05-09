import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import inicioSesion from '@client/pages/iniciarSesion/models/inicioSesion';
import IniciarSesion from '@client/pages/iniciarSesion/interceptors/interceptor_IniciarSesion';

function Formulario() {
  const [user, setUser] = useState<inicioSesion>(inicioSesion);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    inicioSesion.usuario = user.usuario;
    inicioSesion.contrasena = user.contrasena;

    // Validar token
    if (IniciarSesion()) {
      console.log('Iniciando Home');
      navigate('/home')
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, contrasena: e.target.value });
    console.log(user.contrasena);
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, usuario: e.target.value });
    console.log(user.usuario);
  };

  return (
    <form className="col-3 m-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="form-label" htmlFor="form1Example1">Usuario</label>
        <input
          type="text"
          id="user"
          className="form-control"
          onChange={handleChangeUser}
        />
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="form1Example2">Contraseña</label>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={handleChangePassword}
        />
      </div>

      <button type="submit" className="btn btn-primary col-12">Iniciar Sesión</button>
    </form>
  );
}

export default Formulario;
