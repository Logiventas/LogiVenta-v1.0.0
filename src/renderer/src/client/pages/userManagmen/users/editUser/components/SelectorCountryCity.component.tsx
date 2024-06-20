import React, { useEffect, useState, useContext } from 'react';
import SelecteUserContext from '@client/contexts/userContext';

// Definición de datos de países y ciudades con identificadores numéricos
const countryCityData = {
  1: { name: null, cities: { 1: null } },
  2: {
    name: "Argentina",
    cities: {
      2: "Buenos Aires",
      3: "Córdoba",
      4: "Rosario",
      5: "Mendoza",
      6: "La Plata"
    }
  },
  3: {
    name: "Bolivia",
    cities: {
      7: "La Paz",
      8: "Santa Cruz de la Sierra",
      9: "Cochabamba",
      10: "Sucre",
      11: "Oruro"
    }
  },
  4: {
    name: "Chile",
    cities: {
      12: "Santiago",
      13: "Valparaíso",
      14: "Concepción",
      15: "La Serena",
      16: "Antofagasta"
    }
  },
  5: {
    name: "Colombia",
    cities: {
      17: "Bogotá",
      18: "Medellín",
      19: "Cali",
      20: "Barranquilla",
      21: "Cartagena"
    }
  },
  // Añadir el resto de los países y ciudades...
};

const SelectorCountryCity = ({ user, handleChange }) => {
  const [cities, setCities] = useState<{ id: number, name: string }[]>([]);
  const { countries } = useContext(SelecteUserContext);

  useEffect(() => {
    if (user.homeCountry) {
      const cityValues:any = Object.entries(countryCityData[user.homeCountry]?.cities || [])
        .filter(([, cityName]) => cityName !== null)
        .map(([id, name]) => ({ id: parseInt(id, 10), name }));
      setCities(cityValues);
    } else {
      setCities([]);
    }
  }, [user.homeCountry]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    handleChange({ target: { id: 'homeCountry', value: selectedCountryId } });
    handleChange({ target: { id: 'homeCity', value: '' } }); // Restablecer ciudad a "Seleccione"
    const cityValues:any = Object.entries(countryCityData[selectedCountryId]?.cities || [])
      .filter(([, cityName]) => cityName !== null)
      .map(([id, name]) => ({ id: parseInt(id, 10), name }));
    setCities(cityValues);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = parseInt(e.target.value, 10);
    handleChange({ target: { id: 'homeCity', value: selectedCityId } });
  };

  return (
    <div className='d-flex'>
      <div className="me-2 col-6">
        <label className="form-label" htmlFor="homeCountry">País</label>
        <select
          className="form-select"
          value={user.homeCountry ? String(user.homeCountry) : ''}
          onChange={handleCountryChange}
        >
          <option value="" disabled>Seleccione</option>
          {Object.entries(countryCityData)
            .filter(([id, country]) => country.name !== null)
            .map(([id, country]) => (
              <option key={id} value={id}>
                {country.name}
              </option>
            ))}
        </select>
      </div>
      <div className="col-6 ms-1 pe-3">
        <label className="form-label" htmlFor="homeCity">Ciudad</label>
        <select
          className="form-select"
          value={user.homeCity ? String(user.homeCity) : ''}
          onChange={handleCityChange}
        >
          <option value="" disabled>Seleccione</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { SelectorCountryCity };
