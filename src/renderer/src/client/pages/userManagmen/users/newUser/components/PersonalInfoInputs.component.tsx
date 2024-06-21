import React from 'react';
import User from '../models/User.model';

interface PersonalInfoInputsProps {
  data: User;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix: string;
}

const PersonalInfoInputs: React.FC<PersonalInfoInputsProps> = ({ data, handleChange, prefix }) => {
  return (
    <>
    
      <div className="col-12 d-flex gap-2 mb-1">
        <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor={`${prefix}firstName`}>Nombres</label>
        <input
          className="form-control"
          id={`${prefix}firstName`}
          value={data[`${prefix}firstName`] || ''}
          onChange={handleChange}
          required
        />
        <input
          className="form-control"
          id={`${prefix}secondName`}
          value={data[`${prefix}secondName`] || ''}
          onChange={handleChange}
        
        />
      </div>
      <div className="col-12 d-flex gap-2 mb-1">
        <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor={`${prefix}surname`}>Apellidos</label>
        <input
          className="form-control"
          id={`${prefix}surname`}
          value={data[`${prefix}surname`] || ''}
          onChange={handleChange}
          required
        />
        <input
          className="form-control"
          id={`${prefix}secondSurname`}
          value={data[`${prefix}secondSurname`] || ''}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 d-flex gap-2 mb-1">
        <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor={`${prefix}phone`}>Teléfonos</label>
        <input
          className="form-control"
          id={`${prefix}phone`}
          value={data[`${prefix}phone`] || ''}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 d-flex pb-2">
        <label className="form-label col-lg-2 col-md-3 my-auto me-2" htmlFor={`${prefix}email`}>Email</label>
        <input
          type="email"
          className="form-control"
          id={`${prefix}email`}
          value={data[`${prefix}email`] || ''}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default PersonalInfoInputs;
