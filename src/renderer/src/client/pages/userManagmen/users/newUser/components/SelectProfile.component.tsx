import React, { useState, useEffect } from 'react';

interface SelectProfileProps {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectProfile: React.FC<SelectProfileProps> = ({ handleChange }) => {
    const [profiles, setProfiles] = useState<{ [key: number]: string | null }>({});
    const [selectedProfile, setSelectedProfile] = useState<string>("");

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchProfiles = async () => {
            const profilesData = { 1: 'Administrador', 2: 'Usuario', 3: 'Invitado' };
            setProfiles(profilesData);
        };

        fetchProfiles();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProfile(e.target.value);
        handleChange(e);
    };

    return (
        <select required id="profile" className="form-select" value={selectedProfile} onChange={handleSelectChange}>
            <option value="" disabled>Selecciona</option>
            {Object.entries(profiles).map(([id, profile]) => (
                <option key={id} value={id === "0" ? "" : id}>{profile}</option>
            ))}
        </select>
    );
};

export default SelectProfile;
