import React, { useEffect, useState, useContext } from 'react';
import SelecteUserContext from '@client/contexts/userContext';

const SelectorCountryCity = ({ user, handleChange }) => {
  const { countries } = useContext(SelecteUserContext);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (user.homeCountry) {
      const selectedCountry = countries.find(country => country.id === user.homeCountry);
      const cityNames:any = selectedCountry ? selectedCountry.cities.map(city => city.name).filter(city => city !== null) : [];
      setCities(cityNames);
    } else {
      setCities([]);
    }
  }, [user.homeCountry, countries]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryId = parseInt(e.target.value, 10);
    handleChange({ target: { id: 'homeCountry', value: selectedCountryId } });
    handleChange({ target: { id: 'homeCity', value: '' } }); // Restablecer ciudad a "Seleccione"
    const selectedCountry = countries.find(country => country.id === selectedCountryId);
    const cityNames:any = selectedCountry ? selectedCountry.cities.map(city => city.name).filter(city => city !== null) : [];
    setCities(cityNames);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = e.target.value;
    const selectedCountry = countries.find(country => country.id === user.homeCountry);
    const selectedCityId = selectedCountry ? selectedCountry.cities.find(city => city.name === selectedCityName)?.id : null;
    
    if (selectedCityId !== null) {
      handleChange({ target: { id: 'homeCity', value: selectedCityId } });
    }
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
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { SelectorCountryCity };
