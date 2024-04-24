import logo from '/src/assets/img/usuario.png';
function perfil () {
  return (
        <>
            <div className="col ">
                <h5 style={{ fontSize: '30px' }} className="mx-auto  my-4 row text-center"><strong>Iniciar Sesión</strong></h5>
                <img src={logo} className="row rounded-circle my-4 m-auto" style={{ width: '150px' }} alt="Avatar" />
            </div>
        </>
  )
}

export default perfil
