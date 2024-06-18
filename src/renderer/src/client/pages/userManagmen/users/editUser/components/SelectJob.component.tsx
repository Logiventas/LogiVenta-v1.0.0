import React, { useState, useEffect } from 'react';

interface SelectJobProps {
    user: { job: string };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectJob: React.FC<SelectJobProps> = ({ user, handleChange }) => {
    const jobData = ['Data Scientist', 'Project Manager', 'Product Manager', 'Software Engineer'];
    const [jobs, setJobs] = useState<string[]>(jobData);

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
            {jobs.map((job, index) => (
                <option key={index} value={job}>{job}</option>
            ))}
        </select>
    );
};

export default SelectJob;
