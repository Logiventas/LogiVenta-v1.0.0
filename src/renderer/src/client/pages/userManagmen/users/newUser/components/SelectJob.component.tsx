import  { useState, useEffect } from 'react';

export const SelectJob = ({ user, handleChange }) => {
    const jobData = ['Manager', 'Usuario', 'Invitado'];
    const [profiles, setProfiles] = useState<string[]>(jobData);

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchProfiles = async () => {
            setProfiles(jobData)
        };

        fetchProfiles();
    }, []);

    return (
        <select id="job" className="form-select" value={user.job} onChange={handleChange}>
            <option value="" disabled>Selecciona</option>
            {profiles.map((job, index) => (
                <option key={index} value={job}>{job}</option>
            ))}
        </select>
    );
};
