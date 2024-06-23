//src\renderer\src\client\pages\userManagmen\profiles\tableProfiles\components\DeletProfile.tsx
import React, { useState, useEffect } from 'react';
import { deleteProfile } from '../adapters/deleteProfile.adapter';
import Toasts from '@renderer/client/components/Toasts.component';
import { geProfiles } from '../adapters/allProfiles.adapter';
const fetchProfiles = async () => {
  const profilesData = await geProfiles();
  const profiles = profilesData.map(perfil => ({
    id: perfil.id,
    name: perfil.profile
  }));
  return profiles;
};



interface DeleteProfileProps {
  show: boolean;
  handleClose: () => void;
  idProfile: number;
  profile: string;
  onProfileDeleted: () => void; // Nueva prop para recargar perfiles
}

interface DeleteProfileProps {
  show: boolean;
  handleClose: () => void;
  idProfile: number;
  profile: string;
  onProfileDeleted: () => void; // Nueva prop para recargar perfiles
}

export const DeleteProfile: React.FC<DeleteProfileProps> = ({ show, handleClose, idProfile, profile, onProfileDeleted }) => {
  const [isFirstConfirmation, setIsFirstConfirmation] = useState(false);
  const [profiles, setProfiles] = useState<{ id: number, name: string }[]>([]);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [validated, setValidated] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastSuccess, setToastSuccess] = useState<boolean>(false);

  useEffect(() => {
    const loadProfiles = async () => {
      const profiles = await fetchProfiles();
      setProfiles(profiles.filter(p => p.id !== idProfile && p.name !== profile));
    };
    loadProfiles();
  }, [idProfile, profile]);

  useEffect(() => {
    if (!show) {
      setIsFirstConfirmation(false);
      setSelectedProfile('');
      setValidated(false);
    }
  }, [show]);

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedProfile) {
      setValidated(true);
      return;
    }

    const selectedProfileData = profiles.find(p => p.id === Number(selectedProfile));

    if (!isFirstConfirmation) {
      setIsFirstConfirmation(true);
    } else {
      const response = await deleteProfile({
        delete: { id: idProfile, name: profile },
        replace: { id: selectedProfileData?.id!, name: selectedProfileData?.name! }
      });

      setToastMessage(response.message);
      setToastSuccess(response.success);
      handleClose();
      onProfileDeleted(); // Recarga los perfiles
    }
  };

  return (
    <>
      {toastMessage && <Toasts message={toastMessage} success={toastSuccess} onHide={() => setToastMessage(null)} />}
      <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={handleDelete} noValidate className={validated ? 'was-validated' : ''}>
              <div className="modal-header">
                <h5 className="modal-title">Eliminar Perfil</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>ID del Perfil:</strong> {idProfile}</p>
                <p><strong>Nombre del Perfil:</strong> {profile}</p>
                <p>Está a punto de eliminar este perfil. Tenga en cuenta que todos los usuarios que usan este perfil deberán ser reasignados a otro perfil.</p>
                <p>Por favor, seleccione el perfil al que desea reasignar los usuarios:</p>
                <select 
                  value={selectedProfile} 
                  onChange={(e) => setSelectedProfile(e.target.value)} 
                  className="form-control mb-3" 
                  required
                  disabled={isFirstConfirmation}
                >
                  <option value="">Seleccione un perfil...</option>
                  {profiles.map(p => (
                    <option key={p.id} value={p.id.toString()}>{p.name}</option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Debe seleccionar un perfil para reasignar los usuarios.
                </div>
                {isFirstConfirmation && (
                  <div className="alert alert-warning">
                    <p>¡Advertencia! Está a punto de eliminar el perfil. ¿Desea continuar?</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                {!isFirstConfirmation ? (
                  <>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                    <button type="submit" className="btn btn-primary">Confirmar</button>
                  </>
                ) : (
                  <>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsFirstConfirmation(false)}>Regresar</button>
                    <button type="submit" className="btn btn-danger">Eliminar definitivamente</button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
