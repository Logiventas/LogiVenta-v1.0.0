import  { useState, ChangeEvent, FormEvent } from "react";
import inicioSesion from "../models/inicioSesion";
import login from '../interceptors/interceptor_IniciarSesion'
function Formulario() {


  const [user, setUser] = useState<inicioSesion>(inicioSesion);


  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        inicioSesion.usuario=user.usuario
        inicioSesion.contrasena=user.contrasena
        //validar tocken
        if(login()){
            console.log('Inicando Home')
        }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({...user, contrasena: e.target.value});
    console.log(user.contrasena);
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({...user, usuario: e.target.value});
    console.log(user.usuario);
  };

  return (
    <>
      <form className="col-3 m-auto">
        <div className="mb-4">
          <label className="form-label" htmlFor="form1Example1">Usuario</label>
          <input
            type="text"
            id="user"
            className="form-control"
            onChange={handleChangeUser}
          />
        </div>

        <div className=" mb-4">
          <label className="form-label" htmlFor="form1Example2">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={handleChangePassword}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary col-12">Iniciar Sesión</button>
      </form>
    </>
  );
}

export default Formulario;
