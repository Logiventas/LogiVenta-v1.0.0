import React, { useEffect, useState } from 'react';
import InputSelect from "@client/components/InputSelect.component";

const SelectorCountryCity = ({ user, handleChange, Contry }) => {
    const [cities, setCities] = useState<string[]>(Contry[user.homeCountry] || []);

    useEffect(() => {
        setCities(Contry[user.homeCountry] || []);
    }, [user.homeCountry, Contry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = e.target.value;
        handleChange({ target: { id: 'homeCountry', value: selectedCountry } });
        handleChange({ target: { id: 'homeCity', value: '' } }); // Restablecer ciudad a "Seleccione"
        setCities(Contry[selectedCountry] || []);
    };

    
    return (
        <div  className='d-flex'>
            <div className=" me-2 col-6 ">
                <label className="form-label" htmlFor="homeCountry">País</label>
                <InputSelect options={Object.keys(Contry)} value={user.homeCountry || ''} onChange={handleCountryChange} />
            </div>
            <div className="col-6 ms-1  pe-3">
                <label className="form-label" htmlFor="homeCity">Ciudad</label>
                <InputSelect options={cities} value={user.homeCity || ''} onChange={(e) => handleChange({ target: { id: 'homeCity', value: e.target.value } })} />
            </div>
        </div>
    );
};

export { SelectorCountryCity };
