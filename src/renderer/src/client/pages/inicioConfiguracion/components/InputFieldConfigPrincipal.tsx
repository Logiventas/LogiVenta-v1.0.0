// components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div className="mb-3 col-6 m-auto">
      <label className="form-label">{label}</label>
      <input
        className="form-control "
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
