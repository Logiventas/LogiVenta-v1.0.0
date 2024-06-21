import React, { useState } from 'react';

interface SelectJobProps {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectJob: React.FC<SelectJobProps> = ({ handleChange }) => {
    const jobData = { 2: 'Software Engineer', 3: 'Data Scientist', 4: 'Project Manager', 5: 'Product Manager', 6: 'UI/UX Designer' };
    const [jobs] = useState<{ [key: number]: string }>(jobData);
    const [selectedJob, setSelectedJob] = useState<string>('');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedJob(e.target.value);
        handleChange(e);
    };

    return (
        <select id="job" className="form-select" value={selectedJob} onChange={handleSelectChange}>
            <option value="" disabled>Selecciona</option>
            {Object.entries(jobs).map(([id, job]) => (
                <option key={id} value={id}>{job}</option>
            ))}
        </select>
    );
};

export default SelectJob;
