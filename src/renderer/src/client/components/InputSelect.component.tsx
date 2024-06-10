import React from 'react';

interface InputSelectProps {
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InputSelect({ options, value, onChange }: InputSelectProps) {
    return (
        <select   className="form-select custom-select" value={value} onChange={onChange}>
            <option value="" disabled>Seleccione</option>
            {options.map((option, index) => (
                <option  key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
