//src\renderer\src\client\pages\users\index.tsx
import { TituloModulo } from "@renderer/client/components/tituloModulo";
import icon_user from '@renderer/assets/icon/userManagmen.png';
import { Link } from "react-router-dom";

const Users = () => {
    return (
        <div className="">
            <TituloModulo titulo="Usuarios" img={icon_user} />
            <div className="row mx-3" style={{ height: '60vh' }}>

                <div className="col-8">
                    <h1>Usuarios</h1>
                </div>
                <div className="col-4">
                    <h1>Filtro de Usuarios</h1>
                </div>
            </div>
            <div className="d-flex  mx-4 justify-content-end">
                <Link to="/userManagement/newUser" className="btn btn-primary mx-3">Nuevo Usuario</Link>
                <Link to="/userManagement/retiredUsers" className="btn btn-primary">Usuarios Retirados</Link>
            </div>
        </div>
    );
};

export default Users;
