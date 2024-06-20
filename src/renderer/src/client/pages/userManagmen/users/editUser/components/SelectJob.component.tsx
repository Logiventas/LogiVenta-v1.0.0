import React, { useState, useEffect } from 'react';

interface SelectJobProps {
    user: { job: number };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectJob: React.FC<SelectJobProps> = ({ user, handleChange }) => {
    const jobData = { 2: 'Software Engineer', 3: 'Data Scientist', 4: 'Project Manager', 5: 'Product Manager', 6: 'UI/UX Designer' };
    const [jobs, setJobs] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        // Simulamos la carga de datos desde una fuente externa
        const fetchJobs = async () => {
            setJobs(jobData);
        };

        fetchJobs();
    }, []);

    return (
        <select id="job" className="form-select" value={user.job} onChange={handleChange}>
            <option value="" disabled>Selecciona</option>
            {Object.entries(jobs).map(([id, job]) => (
                <option key={id} value={Number(id)}>{job}</option>
            ))}
        </select>
    );
};

export default SelectJob;
