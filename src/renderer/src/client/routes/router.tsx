import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Principal from '../pages/inicioConfiguracion/Principal'
import ConfigPrincipal from '../pages/inicioConfiguracion/ConfigPrincipal'
import ConfigSecundaria from '../pages/inicioConfiguracion/configSecundaria'
import Home from '../pages/home/Home'
import IniciarSesion from '../pages/iniciarSesion/iniciarSesion'
import Config from '../../../../../config.json'


function AppRouter() {
    const inicial = Config.server && Config.client ? true : false;

    const [loading, setLoading] = useState(false);  // Estado para controlar la visibilidad del loader

    // Función para ocultar el loader
    const handleLoadComplete = (option:boolean) => {
        option? setLoading(true): setLoading(false)    
    }
    useEffect(() =>{
        handleLoadComplete(true)
    })

    return (
        <>
        {   }
            {loading?<div className="loader"></div>:''} 
            <Router>
                <Routes>
                    <Route path="/" element={inicial ? <IniciarSesion  /> : <Principal  />} />
                    <Route path="/home" element={<Home  />} />
                    <Route path="/config1" element={<ConfigPrincipal  />} />
                    <Route path="/config2" element={<ConfigSecundaria  />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter;
