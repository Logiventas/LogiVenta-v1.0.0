import React, { createContext, useState, ReactNode } from 'react';

// Define la estructura del usuario y los permisos
const initialUserState = {
  idUser: "",
  firstName: "User",
  secondName: "",
  surname: "user",
  secondSurname: "",
  email: "",
  userName: "",
  acceso: {
    gestionArchivo: true,
    gestionSistema: true,
    gestionCaja: true,
    gestionUsuario: true,
    gestionInventario: true,
    gestionProveedores: true,
    registroVentas: true
  }
};

// Crear el contexto con los datos del usuario y una función para actualizarlos
const SelecteUserContext = createContext({
  user: initialUserState,
  setUser: (_: typeof initialUserState) => {}
});

SelecteUserContext.displayName = 'DatosUsuario';

interface SelecteUserProviderProps {
  children: ReactNode;
}

export const SelecteUserProvider: React.FC<SelecteUserProviderProps> = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  return (
    <SelecteUserContext.Provider value={{ user, setUser }}>
      {children}
    </SelecteUserContext.Provider>
  );
};

export default SelecteUserContext;
