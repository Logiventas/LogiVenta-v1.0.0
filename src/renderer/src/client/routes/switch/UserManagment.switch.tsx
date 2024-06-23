import { Routes, Route } from 'react-router-dom';
import UserManagement from '@renderer/client/pages/userManagmen';
import TableUsers from '@renderer/client/pages/userManagmen/users/tableUsers';
import NewUser from '@renderer/client/pages/userManagmen/users/newUser';
import EditUser from '@renderer/client/pages/userManagmen/users/editUser';
import Profiles from '@renderer/client/pages/userManagmen/profiles/tableProfiles';
import {EditProfile} from '@renderer/client/pages/userManagmen/profiles/editProfile';
import {NewProfile} from '@renderer/client/pages/userManagmen/profiles/newProfile';

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
                <Route path="editProfile/:idProfile" element={<EditProfile/>} />
                <Route path="newPrfile/" element={<NewProfile/>} />
            </Route>

        </Routes>
    );
}

export default UserManagementSwitch;
