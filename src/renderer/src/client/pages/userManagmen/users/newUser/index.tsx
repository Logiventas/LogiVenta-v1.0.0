import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from "./models/User.model";
import ProfilePicture from './components/ProfilePicture.component';
import { SelectorCountryCity } from './components/SelectorCountryCity.component';
import PersonalInfoInputs from './components/PersonalInfoInputs.component';
import SelectProfile from './components/SelectProfile.component';
import SelectJob from './components/SelectJob.component';
import { Account } from './components/Account.component';
import GenderSelect from './components/GenderSelect.component';
import { postUserAdapter } from './adapters/postUser.adapter';
import Toasts from '@client/components/Toasts.component';

const exampleUser: User = {

    idUser: 0, identification: null, sex: '', userName: '', account: 0, firstName: "", secondName: "", surname: "", secondSurname: "",
    email: "", phone: 0, profile: 0, job: 1, homeCountry: 1, homeCity: 1, homeAddress: "",
    profilePicture: null, password: "", emergencyFirstName: "",
    emergencySecondName: "", emergencySurname: "", emergencySecondSurname: "", emergencyPhone: 0, emergencyEmail: "",
};

const EditUser: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>(exampleUser);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleChange = (e: { target: { id: string, value: string } }) => {
        const { id, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [id]: value }));
    };

    const handleFileChange = (file: File) => {
        setProfilePicture(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await postUserAdapter(user);
            setMessage(response.message);
            setSuccess(response.status === 'success');
            setShowModal(true);
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            setMessage('Error al actualizar el usuario');
            setSuccess(false);
            setShowModal(true);
        }
    };

    const handleModalHide = () => {
        setShowModal(false); // Restablecer el estado del modal
        navigate(`/userManagement/newUser`, { replace: true });
    };

    return (
        <div style={{ width: '97%' }} className="row d-flex justify-content-center">
            <form style={{ height: '80%' }} className="row" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-lg-2 d-flex mx-2 flex-column">
                        <h4 className="">Perfil</h4>
                        <ProfilePicture file={profilePicture} onFileChange={handleFileChange} />
                        <div className="my-1">
                            <label htmlFor='profile' className="form-label">Perfil de Usuario</label>
                            <SelectProfile  handleChange={handleChange} />
                        </div>
                        <div className="my-1">
                            <label className="form-label" htmlFor="job">Cargo</label>
                            <SelectJob  handleChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-5 mx-auto">
                        <div className="col-11 mx-auto">
                            <h4 className="mb-2">Datos Básicos</h4>
                            <div className="d-flex col-12 m-auto gap-2 pe-2">
                                <div className='col-8 mb-1'>
                                    <label className="form-label" htmlFor="identification">Identificación</label>
                                    <input type="text" className="form-control" id="identification" onChange={handleChange} required />
                                </div>
                                <div className='col-4'>
                                    <label className="form-label" htmlFor="sex">Sexo</label>
                                    <GenderSelect user={user} handleChange={handleChange} />
                                </div>
                            </div>
                            <PersonalInfoInputs data={user} handleChange={handleChange} prefix="" />
                        </div>
                        <div className="col-11 mx-auto">
                            <h4 className="mt-1">Lugar de Residencia</h4>
                            <div className="d-flex-column">
                                <SelectorCountryCity  handleChange={handleChange} />
                                <div className="col-12 mt-1 d-flex">
                                    <label className="form-label mx-1 my-auto" htmlFor="homeAddress">Dirección</label>
                                    <input className="form-control m-1" id="homeAddress" value={user.homeAddress} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="col-11 mx-auto mb-5">
                            <h4 className="mb-2">Contacto en caso de emergencia</h4>
                            <div className="col-12 d-flex gap-2 mb-1">
                                <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor="emergencyFirstName">Nombres</label>
                                <input className="form-control" id="emergencyFirstName" value={user.emergencyFirstName || ''} onChange={handleChange} />
                                <input className="form-control" id="emergencySecondName" value={user.emergencySecondName || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex gap-2 mb-1">
                                <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor="emergencySurname">Apellidos</label>
                                <input className="form-control" id="emergencySurname" value={user.emergencySurname || ''} onChange={handleChange} />
                                <input className="form-control" id="emergencySecondSurname" value={user.emergencySecondSurname || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex gap-2 mb-1">
                                <label className="form-label col-lg-2 col-md-3 my-auto" htmlFor="emergencyPhone">Teléfono</label>
                                <input className="form-control" id="emergencyPhone" value={user.emergencyPhone || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex pb-1">
                                <label className="form-label col-lg-2 col-md-3 my-auto me-2" htmlFor="emergencyEmail">Email</label>
                                <input className="form-control" id="emergencyEmail" value={user.emergencyEmail || ''} onChange={handleChange} />
                            </div>
                        </div>

                        <div style={{height:'14rem'}}>
                        <Account user={user} handleChange={handleChange} />
                        </div>

                        <div className="col-12 d-flex justify-content-end ">
                            <button style={{ height: '40px' }} type="submit" className="btn btn-primary w-25">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
            {showModal && <Toasts message={message} success={success} onHide={handleModalHide} />}
        </div>
    );
};

export default EditUser;
