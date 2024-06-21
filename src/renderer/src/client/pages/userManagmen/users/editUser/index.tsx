import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import User from "./models/User.model";
import ProfilePicture from './components/ProfilePicture.component';
import { SelectorCountryCity } from './components/SelectorCountryCity.component';
import PersonalInfoInputs from './components/PersonalInfoInputs.component';
import SelectProfile from './components/SelectProfile.component';
import SelectJob from './components/SelectJob.component';
import { TituloModulo } from '@renderer/client/components/TitleModule.component';
import imagen from '@renderer/assets/icon/userManagmen.png';
import { getUserAdapter } from './adapters/getUser.adapter';
import GenderSelect from './components/GenderSelect.component';
import { putUserAdapter } from './adapters/putUser.adapter';
import Toasts from '@client/components/Toasts.component';

const exampleUser: User = {
    id: 0,
    idUser: 0, identification: 0, sex: '', userName: '', account: 0, firstName: "", secondName: "", surname: "", secondSurname: "",
    email: "", phone: 0, profile: 0, job: 0, homeCountry: 0, homeCity: 0, homeAddress: "",
    profilePicture: null, password: "", emergencyFirstName: "",
    emergencySecondName: "", emergencySurname: "", emergencySecondSurname: "", emergencyPhone: 0, emergencyEmail: "",
};

const EditUser: React.FC = () => {
    const { idUser } = useParams<{ idUser: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<User>(exampleUser);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (idUser) {
                try {
                    const userData = await getUserAdapter(idUser);
                    setUser(userData);
                    setProfilePicture(userData.profilePicture);
                } catch (error) {
                    console.error('Error al cargar los datos del usuario:', error);
                }
            }
        };
        fetchUser();
    }, [idUser]);

    const handleChange = (e: { target: { id: string, value: string } }) => {
        const { id, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [id]: value }));
    };

    const handleFileChange = (file: File) => {
        setProfilePicture(file);
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Aquí iría la lógica para eliminar el usuario
        alert('Usuario eliminado correctamente');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await putUserAdapter(user);
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
        navigate(`/userManagement/editUser/${idUser}`, { replace: true });
    };

    return (
        <div style={{ width: '97%' }} className="row d-flex justify-content-center">
            <TituloModulo titulo="Editar Usuario" img={imagen} />
            <form style={{ height: '80%' }} className="row" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-lg-2 d-flex mx-2 flex-column">
                        <h4 className="">Perfil</h4>
                        <ProfilePicture file={profilePicture} onFileChange={handleFileChange} />
                        <div className="my-1">
                            <label className="form-label">Perfil de Usuario</label>
                            <SelectProfile user={user} handleChange={handleChange} />
                        </div>
                        <div className="my-1">
                            <label className="form-label" htmlFor="job">Cargo</label>
                            <SelectJob user={user} handleChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-5 mx-auto">
                        <div className="col-11 mx-auto">
                            <h4 className="mb-2">Datos Básicos</h4>
                            <div className="d-flex col-12  mb-1 justify-content-center">
                                <div className='col-7'>
                                    <label className="form-label   m-auto" htmlFor="identification">Identificación</label>
                                    <input type="text" className="form-control " id="identification" value={user.identification} onChange={handleChange} />
                                </div>
                                <div className='col-5 ms-2 px-1'>
                                    <label className="form-label  m-auto" htmlFor="sex">Sexo</label>
                                    <GenderSelect user={user} handleChange={handleChange} />
                                </div>
                            </div>
                            <PersonalInfoInputs data={user} handleChange={handleChange} prefix="" />
                        </div>
                        <div className="col-11 mx-auto">
                            <h4 className="mt-1">Lugar de Residencia</h4>
                            <div className="d-flex-column">
                                <SelectorCountryCity user={user} handleChange={handleChange} />
                                <div className="col-12 d-flex">
                                    <label className="form-label mx-1 my-auto" htmlFor="homeAddress">Dirección</label>
                                    <input className="form-control m-1" id="homeAddress" value={user.homeAddress} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className="col-11 mx-auto">
                            <h4 className="mb-2">Contacto en caso de emergencia</h4>
                            <div className="col-12 d-flex">
                                <label className="form-label mx-1 my-auto" htmlFor="emergencyFirstName">Nombres</label>
                                <input className="form-control m-1" id="emergencyFirstName" value={user.emergencyFirstName || ''} onChange={handleChange} />
                                <input className="form-control m-1" id="emergencySecondName" value={user.emergencySecondName || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex">
                                <label className="form-label mx-1 my-auto" htmlFor="emergencySurname">Apellidos</label>
                                <input className="form-control m-1" id="emergencySurname" value={user.emergencySurname || ''} onChange={handleChange} />
                                <input className="form-control m-1" id="emergencySecondSurname" value={user.emergencySecondSurname || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex">
                                <label className="form-label mx-1 my-auto" htmlFor="emergencyPhone">Teléfono</label>
                                <input className="form-control m-1" id="emergencyPhone" value={user.emergencyPhone || ''} onChange={handleChange} />
                            </div>
                            <div className="col-12 d-flex">
                                <label className="form-label mx-1 my-auto" htmlFor="emergencyEmail">Email</label>
                                <input className="form-control m-1" id="emergencyEmail" value={user.emergencyEmail || ''} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="h-25 d-flex justify-content-end align-items-end">
                            <button style={{ height: '40px' }} type="button" onClick={handleDelete} className="btn btn-secondary mt-2 ms-2">Eliminar usuario</button>
                            <button style={{ height: '40px' }} type="submit" className="btn btn-primary mt-2 ms-2">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
            {showModal && <Toasts message={message} success={success} onHide={handleModalHide} />}
        </div>
    );
};

export default EditUser;
