import { Routes, Route } from 'react-router-dom';
import UserManagement from '@renderer/client/pages/userManagmen';
import TableUsers from '@renderer/client/pages/userManagmen/users/tableUsers';
import NewUser from '@renderer/client/pages/userManagmen/users/newUser';
const UserManagementSwitch = () => {
    return (
        <Routes>
            <Route path="/userManagement" element={<UserManagement />}>
                <Route path="users" element={<TableUsers />} />
                <Route path="newUser" element={<NewUser/>} />
                <Route path="retiredUsers" element={<h1>Usuarios Retirados</h1>} />
                <Route path="editUser" element={<h1>Editar Usuario</h1>} />
            </Route>
        </Routes>
    );
}

export default UserManagementSwitch;
