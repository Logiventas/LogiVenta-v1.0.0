// components/ConfigOption.js
// components/ConfigOption.tsx
import React from 'react';

interface ConfigOptionProps {
  title: string;
  description: string;
  onSelect: () => void;
}

const ConfigOption: React.FC<ConfigOptionProps> = ({ title, description, onSelect }) => {
  return (
    <div className="card h-100 col-5 m-2">
      <div className="card-body align-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button onClick={onSelect} className="btn btn-primary mt-3">Seleccionar</button>
      </div>
    </div>
  );
};

export default ConfigOption;
