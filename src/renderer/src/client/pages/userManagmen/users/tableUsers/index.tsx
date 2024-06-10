//src\renderer\src\client\pages\userManagmen\users\tableUsers\index.tsx
import { TituloModulo } from "@renderer/client/components/TitleModule.component";
import icon_user from '@renderer/assets/icon/userManagmen.png';
import { Link } from "react-router-dom";
import TableUsers from "./components/TableUsers.component";
import TableFilter from "./components/TableUsersFilter.component";
import { useUserFilter } from './hooks/useUserFilter.hooks';

const Users = () => {
    const { filteredUsers, handleFilterChange, profileOptions, jobOptions } = useUserFilter();

    return (
        <div style={{ width: '98%' }} className="m-auto">
            <TituloModulo titulo="Usuarios" img={icon_user} />
            <div className="d-flex flex-column">
                <div className="mt-1 p-2">
                    <div className="">
                        <TableUsers data={filteredUsers} />
                    </div>
                    <div className="">
                        <h5>Buscar Usuario</h5>
                        <TableFilter onFilterChange={handleFilterChange} profileOptions={profileOptions} jobOptions={jobOptions} />
                    </div>
                </div>
                <div className="d-flex mx-4 my-auto align-content-center justify-content-end">
                    <Link to="/userManagement/newUser" className="btn btn-primary mx-3">Nuevo Usuario</Link>
                    <Link to="/userManagement/retiredUsers" className="btn btn-primary">Usuarios Retirados</Link>
                </div>
            </div>
        </div>
    );
};

export default Users;
