import React, { useEffect, useState } from 'react';
import InputSelect from "@client/components/InputSelect.component";
import User from "../models/User.model";

// Definición de datos de países y ciudades con identificadores numéricos
const countryCityData = {
    2: { name: "Argentina", cities: { 2: "Buenos Aires", 3: "Córdoba" } },
    3: { name: "Bolivia", cities: { 4: "La Paz" } },
    4: { name: "Chile", cities: { 7: "Santiago" } }
};

interface SelectorCountryCityProps {
    user: User;
    handleChange: (e: { target: { id: string, value: any } }) => void;
}

const SelectorCountryCity: React.FC<SelectorCountryCityProps> = ({ user, handleChange }) => {
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        if (user.homeCountry) {
            const cityNames = Object.values<string>(countryCityData[user.homeCountry]?.cities || {});
            setCities(cityNames);
        } else {
            setCities([]);
        }
    }, [user.homeCountry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryId = parseInt(e.target.value, 10);
        handleChange({ target: { id: 'homeCountry', value: selectedCountryId } });
        handleChange({ target: { id: 'homeCity', value: 0 } }); // Restablecer ciudad a "Seleccione"
        const cityNames = Object.values<string>(countryCityData[selectedCountryId]?.cities || {});
        setCities(cityNames);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCityId = parseInt(e.target.value, 10);
        handleChange({ target: { id: 'homeCity', value: selectedCityId } });
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
                    value={cities.find(city => city === countryCityData[user.homeCountry]?.cities[user.homeCity]) || ''} 
                    onChange={handleCityChange} 
                />
            </div>
        </div>
    );
};

export { SelectorCountryCity };
