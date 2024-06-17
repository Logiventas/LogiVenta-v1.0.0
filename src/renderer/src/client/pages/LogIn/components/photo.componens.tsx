import logo from '/assets/img/usuario.png';
function perfil() {
  return (

    <div className="row w-25 m-auto">
      <h5 style={{ fontSize: '30px' }} className="mx-auto  row text-center"><strong>Iniciar Sesión</strong></h5>
      <img src={logo} className="row rounded-circle my-4 m-auto w-75" alt="Avatar" />
    </div>

  )
}

export default perfil
