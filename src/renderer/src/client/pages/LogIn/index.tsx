import Formulario from '@renderer/client/pages/LogIn/components/form.components'
import Perfil from '@client/pages/LogIn/components/photo.componens'
function iniciarSesion () {
  return (
        <div className='h-100  col-12 align-content-center'>
                <Perfil/>
                <Formulario />

        </div>
  )
}

export default iniciarSesion