import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConfigInitial from '@renderer/client/pages/inicioConfiguracion/inicioConfiguracion';
import Home from '@client/pages/index';
import LogIn from '@renderer/client/pages/LogIn';
import { SelecteUserProvider } from '@client/contexts/userContext';
import UserManagementSwitch from './switch/UserManagment.switch';

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
          <Route path="/" element={inicial ? <LogIn /> : <ConfigInitial />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/*" element={<UserManagementSwitch />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </HashRouter>
    </SelecteUserProvider>
  );
}

export default AppRouter;
