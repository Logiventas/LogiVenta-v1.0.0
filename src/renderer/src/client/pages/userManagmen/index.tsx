
import { useContext } from "react";
import SelecteUserContext from '@client/contexts/userContext';
import { Outlet, useLocation } from 'react-router-dom';
import Icono from "../../components/Icon.component";
import icon_user from '@renderer/assets/icon/userManagmen.png';
import icon_profile from '@renderer/assets/icon/userProfile.png';
import icon_job from '@renderer/assets/icon/job.png'
import BarraUsuario from "@renderer/client/components/userBar/index";

const UserManagement = () => {
    const location = useLocation();
    const { user} = useContext(SelecteUserContext);
    return (
        <>
 
            <BarraUsuario />
            <div style={{maxHeight:'100%',minHeight:'85vh'}} className="d-flex w-100 align-content-center mx-auto my-1 justify-content-center row">
                {/* Renderizar iconos solo si la ruta actual es exactamente /userManagement */}
                {location.pathname === '/userManagement' && (
                    <>
                        {user.access["GU01-00"] && <Icono enlace="/userManagement/users" modulo="Usuarios" urlImg={icon_user} />}
                        {user.access["GU02-00"] && <Icono enlace="#" modulo="Perfiles de Usuario" urlImg={icon_profile} />}
                        {user.access["GU03-00"] && <Icono enlace="#" modulo="Gestión de Cargos" urlImg={icon_job} />}
                    </>
                )}
                <Outlet />
            </div>
        </>
    );
};

export default UserManagement