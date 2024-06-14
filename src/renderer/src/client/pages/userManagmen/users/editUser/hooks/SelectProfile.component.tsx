import  { useState, useEffect } from 'react';

export const SelectProfile = ({ user, handleChange }) => {
    const [profiles, setProfiles] = useState<string[]>([]);

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchProfiles = async () => {
            const profilesData = ['Administrador', 'Usuario', 'Invitado'];
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
