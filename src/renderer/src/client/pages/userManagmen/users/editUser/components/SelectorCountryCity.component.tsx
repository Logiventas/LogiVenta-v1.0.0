import React, { useEffect, useState, useContext } from 'react';
import SelecteUserContext from '@client/contexts/userContext';

// Definición de datos de países y ciudades con identificadores numéricos
const SelectorCountryCity = ({ user, handleChange }) => {
  const [cities, setCities] = useState<{ id: number, name: string }[]>([]);
  const { countries } = useContext(SelecteUserContext);

  useEffect(() => {
    if (user.homeCountry) {
      const country = countries.find(c => c.id === user.homeCountry);
      if (country) {
        const cityValues = country.cities
          .filter(city => city.name !== null)
          .map(city => ({ id: city.id, name: city.name as string }));
        setCities(cityValues);
      } else {
        setCities([]);
      }
    } else {
      setCities([]);
    }
  }, [user.homeCountry, countries]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    handleChange({ target: { id: 'homeCountry', value: selectedCountryId } });
    handleChange({ target: { id: 'homeCity', value: '' } });
    const country = countries.find(c => c.id === selectedCountryId);
    if (country) {
      const cityValues = country.cities
        .filter(city => city.name !== null)
        .map(city => ({ id: city.id, name: city.name as string }));
      setCities(cityValues);
    } else {
      setCities([]);
    }
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
          {countries
            .filter(country => country.name !== null)
            .map(country => (
              <option key={country.id} value={country.id}>
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
          {cities.map(city => (
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
