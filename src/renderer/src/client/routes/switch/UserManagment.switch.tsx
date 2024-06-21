import { Routes, Route } from 'react-router-dom';
import UserManagement from '@renderer/client/pages/userManagmen';
import TableUsers from '@renderer/client/pages/userManagmen/users/tableUsers';
import NewUser from '@renderer/client/pages/userManagmen/users/newUser';
import EditUser from '@renderer/client/pages/userManagmen/users/editUser';
import Profiles from '@renderer/client/pages/userManagmen/profiles/tableProfiles';
const UserManagementSwitch = () => {
    return (
        <Routes>
            <Route path="/userManagement/*" element={<UserManagement />}>
                <Route path="users" element={<TableUsers />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="retiredUsers" element={<h1>Usuarios Retirados</h1>} />
                <Route path="editUser/:idUser" element={<EditUser />} />
                <Route path="editUser/:idUser" element={<EditUser />} />
                <Route path="Profiles/*" element={<Profiles />}>
        
                </Route>
                <Route path="editProfile" element={<h1>Nuevo Perfil</h1>} />
            </Route>

        </Routes>
    );
}

export default UserManagementSwitch;
