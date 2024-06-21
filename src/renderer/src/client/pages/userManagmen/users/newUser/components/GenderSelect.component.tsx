import React, { useEffect, useState } from 'react';

interface GenderSelectProps {
    user: { sex: string };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ user, handleChange }) => {
    console.log(user.sex) //imprimer el sexo ejemplo Hombre
   
    const [genders, setGenders] = useState<string[]>([]);

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchGenders = async () => {
            const gendersData = ['Hombre', 'Mujer', 'No binario', 'Género fluido', 'Agénero', 'Bigénero', 'Otro'];
            setGenders(gendersData);
        };

        fetchGenders();
    }, []);

    return (
        <select required id="sex"  className="form-select " value={user.sex} onChange={handleChange}>
            <option value="" disabled>Seleccione su género</option>
            {genders.map((gender, index) => (
                <option key={index} value={gender}>{gender}</option>
            ))}
        </select>
    );
};

export default GenderSelect;
