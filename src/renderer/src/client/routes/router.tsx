import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Principal from '@client/pages/inicioConfiguracion/Principal'
import ConfigPrincipal from '@client/pages/inicioConfiguracion/ConfigPrincipal'
import ConfigSecundaria from '@client/pages/inicioConfiguracion/configSecundaria'
import Home from '@client/pages/home/Home'
import IniciarSesion from '@client/pages/iniciarSesion/iniciarSesion'
import Config from '@renderer/config.json'


function AppRouter() {

    const inicial = !Config.server && !Config.client ? false:true;

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
                    <Route path="/" element={inicial ? <IniciarSesion  /> : <Principal  />} />
                    <Route path="/home/*" element={<Home />} />
                    <Route path="/config1" element={<ConfigPrincipal  />} />
                    <Route path="/config2" element={<ConfigSecundaria  />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRouter;
