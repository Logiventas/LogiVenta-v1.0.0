import React, { useState, useEffect } from 'react';

interface SelectProfileProps {
    user: { profile: string };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectProfile: React.FC<SelectProfileProps> = ({ user, handleChange }) => {
    const [profiles, setProfiles] = useState<string[]>([]);

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchProfiles = async () => {
            const profilesData = ['Usuario', 'Invitado', 'Administrador'];
            setProfiles(profilesData);
        };

        fetchProfiles();
    }, []);

    return (
        <select id="profile" className="form-select" value={user.profile} onChange={handleChange}>
            <option value="" disabled>Selecciona</option>
            {profiles.map((profile, index) => (
                <option key={index} value={profile}>{profile}</option>
            ))}
        </select>
    );
};

export default SelectProfile;
