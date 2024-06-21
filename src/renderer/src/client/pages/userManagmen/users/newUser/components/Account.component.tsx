import React, { useState } from 'react';
import User from '../models/User.model';

interface AccountProps {
    user: User;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Account: React.FC<AccountProps> = ({ user, handleChange }) => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        handleChange(e);
        if (confirmPassword && e.target.value !== confirmPassword) {
            setError('Las contraseñas no coinciden');
        } else {
            setError('');
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (password && e.target.value !== password) {
            setError('Las contraseñas no coinciden');
        } else {
            setError('');
        }
    };

    return (
        <div className="col-11 m-auto">
            <h4>Cuenta de Usuario</h4>
            <div className="mb-2">
                <label htmlFor="userName" className="form-label">Nombre de usuario</label>
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={user.userName}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback" style={{ minHeight: '1.5rem' }}>Por favor ingrese un nombre de usuario válido.</div>
            </div>
            <div className="d-flex gap-2 mt-2">
                <div style={{height:'60px'}} className="col-6 d-flex flex-column ">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${error ? 'is-invalid' : ''}`}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <div className="invalid-feedback" style={{ minHeight: '1.5rem' }}>Las contraseñas no coinciden.</div>
                </div>
                <div className="col-6 pe-2 d-flex flex-column">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${error ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                    <div className="invalid-feedback" style={{ minHeight: '1.5rem' }}>Las contraseñas no coinciden.</div>
                </div>
            </div>
        </div>
    );
};

export { Account };
