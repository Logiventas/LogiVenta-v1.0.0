import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ConfigInitial from '@renderer/client/pages/inicioConfiguracion/inicioConfiguracion';
import Home from '@client/pages/home/Home';
import IniciarSesion from '@client/pages/iniciarSesion/iniciarSesion';
import { SelecteUserProvider } from '@client/contexts/contexts';
import UserManagement from '@renderer/client/pages/userManagmen';
import Users from '@client/pages/users';

let inicial = true;
if (inicial) {
  window.electronAPI.startServer();
}

function AppRouter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoadComplete(false);
  }, []);

  const handleLoadComplete = (option: boolean) => {
    setLoading(option);
  };

  return (
    <SelecteUserProvider>
      {loading && <div className="loader">Loading...</div>}
      <HashRouter>
        <Routes>
          <Route path="/" element={inicial ? <IniciarSesion /> : <ConfigInitial />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/userManagement" element={<UserManagement />}>
            <Route path="users" element={<Users />} />
            <Route path="newUser" element={<h1>nuevo usaurio</h1>} />
            <Route path="retiredUsers" element={<h1>Usuarios retirados</h1>} />
            <Route path="editUser" element={<h1>Editar Usuario</h1>} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </HashRouter>
    </SelecteUserProvider>
  );
}

export default AppRouter;
