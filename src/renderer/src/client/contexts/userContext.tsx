// src/renderer/src/client/contexts/userContext.tsx
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from 'react';
import userContexts from '../model/userContexts.model';
import {Country} from '../model/Country.model';
import {Job} from '../model/Job.model';
import {Profile} from '../model/Profile.model';

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
  countries: []
});

SelecteUserContext.displayName = 'DatosUsuario';

// Estados iniciales
const initialJobs: Job[] = [];
const initialProfiles: Profile[] = [];
const initialCountries: any[] = [
  {
    id: 1,
    name: null,
    cities: [{ id: 1, name: null }]
  },
  {
    id: 2,
    name: "Argentina",
    cities: [
      { id: 2, name: "Buenos Aires" },
      { id: 3, name: "Córdoba" },
      { id: 4, name: "Rosario" },
      { id: 5, name: "Mendoza" },
      { id: 6, name: "La Plata" }
    ]
  },
  {
    id: 3,
    name: "Bolivia",
    cities: [
      { id: 7, name: "La Paz" },
      { id: 8, name: "Santa Cruz de la Sierra" },
      { id: 9, name: "Cochabamba" },
      { id: 10, name: "Sucre" },
      { id: 11, name: "Oruro" }
    ]
  },
  {
    id: 4,
    name: "Chile",
    cities: [
      { id: 12, name: "Santiago" },
      { id: 13, name: "Valparaíso" },
      { id: 14, name: "Concepción" },
      { id: 15, name: "La Serena" },
      { id: 16, name: "Antofagasta" }
    ]
  },
  {
    id: 5,
    name: "Colombia",
    cities: [
      { id: 17, name: "Bogotá" },
      { id: 18, name: "Medellín" },
      { id: 19, name: "Cali" },
      { id: 20, name: "Barranquilla" },
      { id: 21, name: "Cartagena" }
    ]
  },
  {
    id: 6,
    name: "Costa Rica",
    cities: [
      { id: 22, name: "San José" },
      { id: 23, name: "Alajuela" },
      { id: 24, name: "Cartago" },
      { id: 25, name: "Heredia" },
      { id: 26, name: "Liberia" }
    ]
  },
  {
    id: 7,
    name: "Cuba",
    cities: [
      { id: 27, name: "La Habana" },
      { id: 28, name: "Santiago de Cuba" },
      { id: 29, name: "Camagüey" },
      { id: 30, name: "Holguín" },
      { id: 31, name: "Guantánamo" }
    ]
  },
  {
    id: 8,
    name: "Ecuador",
    cities: [
      { id: 32, name: "Quito" },
      { id: 33, name: "Guayaquil" },
      { id: 34, name: "Cuenca" },
      { id: 35, name: "Santo Domingo" },
      { id: 36, name: "Machala" }
    ]
  },
  {
    id: 9,
    name: "El Salvador",
    cities: [
      { id: 37, name: "San Salvador" },
      { id: 38, name: "Santa Ana" },
      { id: 39, name: "Soyapango" },
      { id: 40, name: "San Miguel" },
      { id: 41, name: "Mejicanos" }
    ]
  },
  {
    id: 10,
    name: "España",
    cities: [
      { id: 42, name: "Madrid" },
      { id: 43, name: "Barcelona" },
      { id: 44, name: "Valencia" },
      { id: 45, name: "Sevilla" },
      { id: 46, name: "Zaragoza" }
    ]
  },
  {
    id: 11,
    name: "Guatemala",
    cities: [
      { id: 47, name: "Ciudad de Guatemala" },
      { id: 48, name: "Mixco" },
      { id: 49, name: "Villa Nueva" },
      { id: 50, name: "Quetzaltenango" },
      { id: 51, name: "Escuintla" }
    ]
  },
  {
    id: 12,
    name: "Honduras",
    cities: [
      { id: 52, name: "Tegucigalpa" },
      { id: 53, name: "San Pedro Sula" },
      { id: 54, name: "Choloma" },
      { id: 55, name: "La Ceiba" },
      { id: 56, name: "El Progreso" }
    ]
  },
  {
    id: 13,
    name: "México",
    cities: [
      { id: 57, name: "Ciudad de México" },
      { id: 58, name: "Guadalajara" },
      { id: 59, name: "Monterrey" },
      { id: 60, name: "Puebla" },
      { id: 61, name: "Tijuana" }
    ]
  },
  {
    id: 14,
    name: "Nicaragua",
    cities: [
      { id: 62, name: "Managua" },
      { id: 63, name: "León" },
      { id: 64, name: "Masaya" },
      { id: 65, name: "Chinandega" },
      { id: 66, name: "Matagalpa" }
    ]
  },
  {
    id: 15,
    name: "Panamá",
    cities: [
      { id: 67, name: "Ciudad de Panamá" },
      { id: 68, name: "San Miguelito" },
      { id: 69, name: "Tocumen" },
      { id: 70, name: "David" },
      { id: 71, name: "Arraiján" }
    ]
  },
  {
    id: 16,
    name: "Paraguay",
    cities: [
      { id: 72, name: "Asunción" },
      { id: 73, name: "Ciudad del Este" },
      { id: 74, name: "San Lorenzo" },
      { id: 75, name: "Luque" },
      { id: 76, name: "Capiatá" }
    ]
  },
  {
    id: 17,
    name: "Perú",
    cities: [
      { id: 77, name: "Lima" },
      { id: 78, name: "Arequipa" },
      { id: 79, name: "Trujillo" },
      { id: 80, name: "Chiclayo" },
      { id: 81, name: "Piura" }
    ]
  },
  {
    id: 18,
    name: "República Dominicana",
    cities: [
      { id: 82, name: "Santo Domingo" },
      { id: 83, name: "Santiago de los Caballeros" },
      { id: 84, name: "San Pedro de Macorís" },
      { id: 85, name: "La Romana" },
      { id: 86, name: "Puerto Plata" }
    ]
  },
  {
    id: 19,
    name: "Uruguay",
    cities: [
      { id: 87, name: "Montevideo" },
      { id: 88, name: "Salto" },
      { id: 89, name: "Paysandú" },
      { id: 90, name: "Maldonado" },
      { id: 91, name: "Rivera" }
    ]
  },
  {
    id: 20,
    name: "Venezuela",
    cities: [
      { id: 92, name: "Caracas" },
      { id: 93, name: "Maracaibo" },
      { id: 94, name: "Valencia" },
      { id: 95, name: "Barquisimeto" },
      { id: 96, name: "Maracay" }
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
  const [countries] = useState<Country[]>(initialCountries);
  const value = useMemo(() => ({ user, setUser, profiles, jobs, countries }), [user, profiles, jobs, countries]);
  return (
    <SelecteUserContext.Provider value={value}>
      {children}
    </SelecteUserContext.Provider>
  );
};

export default SelecteUserContext;
