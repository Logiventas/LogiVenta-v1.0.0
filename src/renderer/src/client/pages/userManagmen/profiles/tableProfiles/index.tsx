//src\renderer\src\client\pages\userManagmen\profiles\tableProfiles\index.tsx
import { useContext } from "react";
import SelecteUserContext from '@client/contexts/userContext';
import { TituloModulo } from "@renderer/client/components/TitleModule.component";
import icon_profiles from '@renderer/assets/icon/userProfile.png';
import { Link } from "react-router-dom";
import TableProfile from "./components/TableProfile.component";
import TableFilter from "./components/TableProfileFilter.component";
import { useProfileFilter } from './hooks/useProfileFilter.hooks';

const Profiles = () => {
    const { user } = useContext(SelecteUserContext);
    const { filteredUsers, handleFilterChange, reloadProfiles } = useProfileFilter();

    return (
        <div style={{ width: '98%' }} className="m-auto">
            <TituloModulo titulo="Perfiles de Usuario" img={icon_profiles} />
            <div className="d-flex flex-column">
                <div className="mt-1 p-2">
                    <div className="ms-4">
                        <h4>Perfiles</h4>
                        <div className="d-flex gap-2 my-3">
                            <TableFilter onFilterChange={handleFilterChange} />
                            {user.access["GU01-01"] && (
                                <Link to="/userManagement/newPrfile" className="btn btn-primary mb-1">Nuevo Perfil</Link>
                            )}
                        </div>
                    </div>
                    <div>
                        <TableProfile data={filteredUsers} reloadProfiles={reloadProfiles} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
