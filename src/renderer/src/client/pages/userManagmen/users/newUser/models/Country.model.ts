import { Context} from 'react';
import SelecteUserContext from '@client/contexts/userContext'; 
interface Country {
    Colombia: string[];
    Perú: string[];
    Chile: string[];
    México: string[];
}

const countries: Country = {
    "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta"],
    "Perú": ["Lima", "Arequipa", "Trujillo", "Chiclayo"],
    "Chile": ["Santiago", "Valparaíso", "Concepción", "Valdivia", "Arica", "Antofagasta", "Iquique", "Punta Arenas", "Temuco", "La Serena", "Puerto Montt", "Puerto Varas"],
    "México": ["Ciudad de México"]
};

export { countries };
