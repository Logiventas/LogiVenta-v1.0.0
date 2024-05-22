import Formulario from '@client/pages/iniciarSesion/components/components_formulario'
import Perfil from '@client/pages/iniciarSesion/components/components_perfil'
function iniciarSesion () {
  return (
        <div className='h-100  col-12 align-content-center'>
                <Perfil/>
                <Formulario />

        </div>
  )
}

export default iniciarSesion