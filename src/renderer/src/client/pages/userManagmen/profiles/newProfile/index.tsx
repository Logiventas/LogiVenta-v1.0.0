import React, { useState } from 'react';
import TablePermission from './components/TablePermission.component';
import { Profile } from './models/profile.model';
import { Permission } from './models/permission.model';
import { saveProfileAdapter } from './adapter/saveProfile.adapter';
import Toasts from '@client/components/Toasts.component';

export const NewProfile = () => {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    description: '',
    permissions: [],
  });

  const [errors, setErrors] = useState({ name: '', description: '' });
  const [toastMessage, setToastMessage] = useState('');
  const [toastSuccess, setToastSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  const handlePermissionsChange = (permissions: Permission[]) => {
    setProfile({ ...profile, permissions });
  };

  const validateFields = () => {
    let valid = true;
    let errors = { name: '', description: '' };

    if (!profile.name) {
      errors.name = 'El nombre es obligatorio';
      valid = false;
    }
    if (!profile.description) {
      errors.description = 'La descripción es obligatoria';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const saveProfile = async () => {
    if (validateFields()) {
      console.log('Perfil guardado:', profile);
      const response = await saveProfileAdapter(profile);
      setToastMessage(response.message);
      setToastSuccess(response.success);
      setShowToast(true);
    }
  };

  return (
    <div className='d-flex flex-column justify-content-around'>

      <div className='row justify-content-center'>
        <div className='col-11'>
          <div className='d-flex justify-content-between gap-3 align-items-center mb-3'>
            <div className='col-9 mt-4'>
              <h4>Datos de Perfil</h4>
              <div style={{ height: '100px' }} className='row pb-3'>
                <div className='col-sm-4 col-md-4'>
                  <label htmlFor="name">Nombre de Perfil</label>
                  <input
                    type='text'
                    id="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className={`form-control mt-2 ${errors.name ? 'is-invalid' : ''}`}
                    maxLength={20}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className='col-sm-6 col-md-8'>
                  <label htmlFor="description">Descripción</label>
                  <input
                    type='text'
                    id="description"
                    value={profile.description}
                    onChange={handleInputChange}
                    className={`form-control mt-2 ${errors.description ? 'is-invalid' : ''}`}
                    maxLength={60}
                    required
                  />
                  {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
              </div>
            </div>
            <div className='align-items-center col-2'>
              <div className='d-flex justify-content-between'>
                <p className='m-auto'>Módulo</p>
                <div
                  className='my-auto'
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '100%',
                    backgroundColor: 'var(--color-accent)'
                  }}
                ></div>
              </div>
              <div className='d-flex justify-content-between'>
                <p className='m-auto'>Submódulo</p>
                <div
                  className='my-auto'
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '100%',
                    backgroundColor: 'var(--color-primary-red)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TablePermission onPermissionsChange={handlePermissionsChange} />
      <div style={{ width: '95%' }} className='d-flex justify-content-end'>
        <button className='btn btn-primary my-4' onClick={saveProfile}>Guardar</button>
      </div>
      <div  style={{width:'100%'}} className=' d-flex  justify-content-center'>
        {showToast && (
          <Toasts
            message={toastMessage}
            success={toastSuccess}
            onHide={() => setShowToast(false)}
          />
        )}
      </div>


    </div>

  );
};
