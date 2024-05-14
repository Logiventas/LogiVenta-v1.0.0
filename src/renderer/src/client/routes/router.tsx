import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import ConfigInitial from '@renderer/client/pages/inicioConfiguracion/inicioConfiguracion'
import Home from '@client/pages/home/Home'
import IniciarSesion from '@client/pages/iniciarSesion/iniciarSesion'

let inicial = null
function AppRouter() {

     
    const [loading, setLoading] = useState(false);  // Estado para controlar la visibilidad del loader

    // Función para ocultar el loader
    const handleLoadComplete = (option:boolean) => {
        option? setLoading(true): setLoading(false)    
    }

    useEffect(()=>{
        handleLoadComplete(false)
    })
    return (
        <>
        {   }
            {loading?<div className="loader"></div>:''} 
            <HashRouter>
                <Routes>
                    <Route path="/" element={inicial==null?<ConfigInitial  />: <IniciarSesion  /> } />
                    <Route path="/home/*" element={<Home />} />
                    <Route path="iniciarSesion" element={<IniciarSesion  />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRouter;
