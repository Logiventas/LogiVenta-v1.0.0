
import { Outlet, useLocation } from 'react-router-dom';
import Icono from "../../components/Icon.component";
import icon_user from '@renderer/assets/icon/userManagmen.png';
import icon_profile from '@renderer/assets/icon/userProfile.png';
import BarraUsuario from "@renderer/client/components/userBar/index";

const UserManagement = () => {
    const location = useLocation();

    return (
        <>
 
            <BarraUsuario />
            <div className="d-flex w-100 align-content-center mx-auto my-1 justify-content-center row">
                {/* Renderizar iconos solo si la ruta actual es exactamente /userManagement */}
                {location.pathname === '/userManagement' && (
                    <>
                        <Icono enlace="/userManagement/users" modulo="Usuarios" urlImg={icon_user} />
                        <Icono enlace="#" modulo="Perfiles de Usuario" urlImg={icon_profile} />
                    </>
                )}
                <Outlet />
            </div>
        </>
    );
};

export default UserManagement