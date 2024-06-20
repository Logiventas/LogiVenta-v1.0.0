import React, { useState, useEffect } from 'react';

interface SelectProfileProps {
    user: { id:number, profile: number };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectProfile: React.FC<SelectProfileProps> = ({ user, handleChange }) => {
    const [profiles, setProfiles] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchProfiles = async () => {
            const profilesData = { 1: 'Administrador', 2: 'Usuario', 3: 'Invitado' };
            setProfiles(profilesData);
        };

        fetchProfiles();
    }, []);
console.log('Este es el id',user.id );
    return (
        <select id="profile" className="form-select" value={user.profile} onChange={handleChange} disabled={user.id == 1}>
            <option value="" disabled>Selecciona</option>
            {Object.entries(profiles).map(([id, profile]) => (
                <option key={id} value={Number(id)}>{profile}</option>
            ))}
        </select>
    );
};

export default SelectProfile;
