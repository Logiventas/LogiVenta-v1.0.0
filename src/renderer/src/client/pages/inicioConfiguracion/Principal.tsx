import Icono from '@client/pages/home/components/component_icono'
export default function Principal () {
  return (

<>

<div
      style={{ height: '100vh' }}
      className=" d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="mb-5">
        Por favor, elija cómo desea configurar la instalación
      </h1>
      <div className="d-flex justify-content-center gap-5">
        <Icono modulo="Caja secundaria" urlImg="src/assets/icon/CajaSecundaria.png" enlace='/config2'/>
        <Icono modulo="Caja Principal" urlImg="src/assets/icon/CajaPrincipal.png" enlace='/config1'/>
      </div>

    </div>

</>

  )
}
