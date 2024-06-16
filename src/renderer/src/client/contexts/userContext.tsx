import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import userContexts from '../model/userContexts.model';
import { Country } from '@renderer/client/model/Country.model';
import { Job } from '../model/Job.model';
import { Profile } from '../model/Profile.model';

// Define la estructura del usuario y los permisos
const initialUserState: userContexts = {
  idUser: 0,
  firstName: "User",
  secondName: "",
  surname: "user",
  secondSurname: "",
  userName: "",
  access: {
    'CS00-00': false,
    'CS01-00': false,
    'CS01-01': false,
    'CS01-02': false,
    'CS01-03': false,
    'CS01-04': false,
    'CS02-00': false,
    'CS03-00': false,
    'CS04-00': false,
    'CS04-01': false,
    'CS04-02': false,
    'CS04-03': false,
    'CS04-04': false,
    'CS05-00': false,
    'GA00-00': false,
    'GA01-00': false,
    'GA02-00': false,
    'GC00-00': false,
    'GC01-00': false,
    'GC02-00': false,
    'GC03-00': false,
    'GC04-00': false,
    'GC05-00': false,
    'GC06-00': false,
    'GC07-00': false,
    'GI00-00': false,
    'GI01-00': false,
    'GI02-00': false,
    'GI03-00': false,
    'GI04-00': false,
    'GI05-00': false,
    'GI06-00': false,
    'GI07-00': false,
    'GP00-00': false,
    'GU00-00': false,
    'GU01-00': false,
    'GU01-01': false,
    'GU01-02': false,
    'GU01-03': false,
    'GU01-04': false,
    'GU02-00': false,
    'GU02-01': false,
    'GU02-02': false,
    'GU02-03': false,
    'GU03-00': false,
    'GU03-01': false,
    'GU03-02': false,
    'GU03-03': false,
    'I000-00': false,
    'RV00-00': false,
  },
  sex: ''
};

// Define la estructura del contexto del usuario
interface UserContextType {
  user: userContexts;
  setUser: Dispatch<SetStateAction<userContexts>>;
  profiles: Profile[];
  jobs: Job[];
  countries: Country[];
}

// Crear el contexto con los datos del usuario y una función para actualizarlos
const SelecteUserContext = createContext<UserContextType>({
  user: initialUserState,
  setUser: () => { },
  profiles: [],
  jobs: [],
  countries:[]
});

SelecteUserContext.displayName = 'DatosUsuario';

// Estados iniciales
const initialJobs: Job[] = [];
const initialProfiles: Profile[] = [];
const initialCountries = [
  {
    id: 1,
    name: "Argentina",
    cities: [
      { id: 1, name: "Buenos Aires" },
      { id: 2, name: "Córdoba" },
      { id: 3, name: "Rosario" }
    ]
  },
  {
    id: 2,
    name: "Brasil",
    cities: [
      { id: 1, name: "São Paulo" },
      { id: 2, name: "Rio de Janeiro" },
      { id: 3, name: "Brasilia" }
    ]
  }
];

interface SelecteUserProviderProps {
  children: ReactNode;
}

export const SelecteUserProvider: React.FC<SelecteUserProviderProps> = ({ children }) => {
  const [user, setUser] = useState(initialUserState);
  const [profiles] = useState<Profile[]>(initialProfiles);
  const [jobs] = useState<Job[]>(initialJobs);
  const [countries] = useState<any>(initialCountries);

  return (
    <SelecteUserContext.Provider value={{ user, setUser, profiles, jobs, countries }}>
      {children}
    </SelecteUserContext.Provider>
  );
};

export default SelecteUserContext;
