import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Principal from '../pages/inicioConfiguracion/Principal'
import ConfigPrincipal from '../pages/inicioConfiguracion/ConfigPrincipal'
import ConfigSecundaria from '../pages/inicioConfiguracion/configSecundaria'
import Home from '../pages/home/Home'
import IniciarSesion from '../pages/iniciarSesion/iniciarSesion'

function AppRouter () {
  return (

        <>

            <Router>
                <Routes>
                    <Route path="/" element={<IniciarSesion />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/config1" element={<ConfigPrincipal />} />
                    <Route path="/config2" element={<ConfigSecundaria />} />
                </Routes>
            </Router>

        </>

  )
}

export default AppRouter
