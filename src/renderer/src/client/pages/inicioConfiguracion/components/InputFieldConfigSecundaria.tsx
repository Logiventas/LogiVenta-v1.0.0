// InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, placeholder, onChange }) => {
  return (
    <div className="mb-3 d-flex justify-content-center">
      <div className="col-6">
        <label htmlFor={label.replace(/\s+/g, "").toLowerCase()} className="form-label">{label}</label>
        <input
          className="form-control"
          type="text"
          id={label.replace(/\s+/g, "").toLowerCase()}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
