import React, { useEffect, useState, useContext } from 'react';
import SelecteUserContext from '@client/contexts/userContext';

interface SelectorCountryCityProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectorCountryCity: React.FC<SelectorCountryCityProps> = ({ handleChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [cities, setCities] = useState<{ id: number, name: string }[]>([]);
  const { countries } = useContext(SelecteUserContext);

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(c => c.id === selectedCountry);
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
  }, [selectedCountry, countries]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    setSelectedCountry(selectedCountryId);
    setSelectedCity(null);

    // Crear un evento de cambio compatible con handleChange
    const countryChangeEvent = {
      target: {
        id: 'homeCountry',
        value: selectedCountryId.toString()
      }
    } as React.ChangeEvent<HTMLSelectElement>;

    const cityChangeEvent = {
      target: {
        id: 'homeCity',
        value: ''
      }
    } as React.ChangeEvent<HTMLSelectElement>;

    handleChange(countryChangeEvent);
    handleChange(cityChangeEvent);

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
    setSelectedCity(selectedCityId);

    // Crear un evento de cambio compatible con handleChange
    const cityChangeEvent = {
      target: {
        id: 'homeCity',
        value: selectedCityId.toString()
      }
    } as React.ChangeEvent<HTMLSelectElement>;

    handleChange(cityChangeEvent);
  };

  return (
    <div className='d-flex'>
      <div className="me-2 col-6">
        <label className="form-label" htmlFor="homeCountry">País</label>
        <select
          className="form-select"
          value={selectedCountry !== null ? String(selectedCountry) : ''}
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
          value={selectedCity !== null ? String(selectedCity) : ''}
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
