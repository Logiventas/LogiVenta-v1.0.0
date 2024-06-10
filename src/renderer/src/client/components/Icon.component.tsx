import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom' // Corrección de la importación y del nombre del componente

const Icono = (props: any) => {
  return (
        <Routes>
            <Route path='/' element={ // Corrección para usar la prop 'element'
                <Link className='w-25 py-3' to={props.enlace}>
                    <div style={{ width: '8rem', cursor: 'pointer' }} className="iconoHover d-flex flex-column align-items-center m-auto ">
                        <img className="" style={{ width: '75px' }} src={props.urlImg} alt="Imagen del módulo"></img>
                        <h6 className="text-center mt-3">{props.modulo}</h6>
                    </div>
                </Link>
            }/>
        </Routes>
  )
}

export default Icono
