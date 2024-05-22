// src/renderer/src/client/pages/iniciarSesion/components/components_formulario.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../models/login.model';
import iniciarSesion from '../services/login.service';

const initialLoginState: Login = {
  userName: '',
  password: ''
};

function Formulario() {
  const [user, setUser] = useState<Login>(initialLoginState);
  const [errorMessage, setErrorMessage] = useState<string>(''); // Estado para el mensaje de error
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await iniciarSesion(user);
      console.log('esta es la respuesta de login',response)
      if (response===201) {
        navigate('/home');
      } 
    } catch (error: any) {
      setErrorMessage(error.message || 'Ocurrió un error inesperado.');
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, password: e.target.value });
    console.log(user.password);
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, userName: e.target.value });
    console.log(user.userName);
  };

  return (

    <form className="row m-auto w-25"  onSubmit={handleSubmit}>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Mostrar mensaje de error si está definido */}

      <div className=" ">
        <label className="form-label" htmlFor="user">Usuario</label>
        <input
          type="text"
          id="user"
          className="form-control"
          onChange={handleChangeUser}
          value={user.userName}
        />
      </div>

      <div className="">
        <label className="form-label" htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={handleChangePassword}
          value={user.password}
        />
      </div>

      <button type="submit" className="btn mt-3 btn-primary mx-auto col-11">Iniciar Sesión</button>
    </form>
  );
}

export default Formulario;
