import React, { useEffect, useState } from 'react';
import InputSelect from "@client/components/InputSelect.component";

// Definición de datos de países y ciudades con identificadores numéricos
const countryCityData = {
    1: { name: "Argentina", cities: { 1: "Buenos Aires" } },
    2: { name: "Bolivia", cities: { 4: "La Paz" } },
    3: { name: "Chile", cities: { 7: "Santiago" } }
};

const SelectorCountryCity = ({ user, handleChange }) => {
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        if (user.homeCountry) {
            setCities(Object.values(countryCityData[user.homeCountry]?.cities || []));
        } else {
            setCities([]);
        }
    }, [user.homeCountry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryName = e.target.value;
        const selectedCountryId = Object.keys(countryCityData).find(key => countryCityData[key].name === selectedCountryName);

        if (selectedCountryId) {
            handleChange({ target: { id: 'homeCountry', value: parseInt(selectedCountryId, 10) } });
            handleChange({ target: { id: 'homeCity', value: '' } }); // Restablecer ciudad a "Seleccione"
            setCities(Object.values(countryCityData[selectedCountryId]?.cities || []));
        }
    };

    return (
        <div className='d-flex'>
            <div className="me-2 col-6">
                <label className="form-label" htmlFor="homeCountry">País</label>
                <InputSelect 
                    options={Object.values(countryCityData).map(country => country.name)} 
                    value={countryCityData[user.homeCountry]?.name || ''} 
                    onChange={handleCountryChange} 
                />
            </div>
            <div className="col-6 ms-1 pe-3">
                <label className="form-label" htmlFor="homeCity">Ciudad</label>
                <InputSelect 
                    options={cities} 
                    value={user.homeCity || ''} 
                    onChange={(e) => handleChange({ target: { id: 'homeCity', value: e.target.value } })} 
                />
            </div>
        </div>
    );
};

export { SelectorCountryCity };
