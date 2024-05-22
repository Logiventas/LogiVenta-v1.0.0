import Icono from "../../components/component_icono"
import icon_user from '@renderer/assets/icon/userManagmen.png';
import icon_profile from '@renderer/assets/icon/userProfile.png'
import BarraUsuario from "@renderer/client/components/barraUsuario/component_barraUsuario";
const UserManagmanage = () => {
    return (
        <>
            <BarraUsuario/>
            <div className="d-flex w-100 h-75 align-content-center mx-auto my-5 justify-content-center  row" >

                <Icono  enlace="#" modulo="Usuario" urlImg={icon_user} />
                <Icono  enlace="#" modulo="Perfiles de Usuario" urlImg={icon_profile} />

            </div>
        </>
    )
}
export default UserManagmanage