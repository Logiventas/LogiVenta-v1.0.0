import React, { useState } from 'react';
//Models
import User from "./models/User.model";
import { useParams } from 'react-router-dom';
//Componets 
import ProfilePicture from './hooks/ProfilePicture.component';
import { SelectorCountryCity } from './hooks/SelectorCountryCity.component';
import PersonalInfoInputs from './components/PersonalInfoInputs.component';
import { SelectProfile } from './hooks/SelectProfile.component';
import { SelectJob } from './hooks/SelectJob.component';
import { TituloModulo } from '@renderer/client/components/TitleModule.component';

import imagen from '@renderer/assets/icon/userManagmen.png';

const exampleUser: User = {
    idUser: 0,identification: 0,firstName: "",secondName: "",surname: "",secondSurname: "",
    email: "",phone: 0,profile: 0,job: 0,homeCountry: 0,homeCity: 0,homeAddress: "",
    profilePicture: null,userName: "",password: "",emergencyFirstName: "",
    emergencySecondName: "",emergencySurname: "",emergencySecondSurname: "",emergencyPhone: 0,emergencyEmail: "",
    emergencyRelation: ""
};

const EditUser = () => {

    const [user, setUser] = useState<User>(exampleUser);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const { idUser } = useParams();
    console.log(idUser)
    const handleChange = (e: { target: { id: string, value: string } }) => {
        const { id, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [id]: value }));
    };

    const handleFileChange = (file: File) => {
        setProfilePicture(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Imprimir datos en consola antes de guardar
        console.log('Datos del usuario:', user);
        if (profilePicture) {
            console.log('Imagen de perfil:', profilePicture);
        }

        // Aquí puedes agregar la lógica para guardar la imagen y los datos del usuario
        const formData = new FormData();
        formData.append('user', JSON.stringify(user));
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }
        console.log(formData);
        // Enviar la información al servidor
        try {
            console.log(formData);

        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    return (
        <div className="row d-flex justify-content-center mx-1">
            <TituloModulo titulo="Editar Usuario" img={imagen} />
            <form style={{ height: '95%' }} className="row p-0" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-lg-2 d-flex mx-2 flex-column">
                        <h4 className="mb-3">Perfil</h4>
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

                        <div className="col-11  col-11 mx-auto">
                            <h4 className="mb-2">Datos Básicos</h4>
                            <div className="d-flex">
                                <label className="form-label col-4 m-auto me-1" htmlFor="identification">Identificación</label>
                                <input type="text" className="form-control ms-1 my-1" id="identification" value={user.identification || ''} onChange={handleChange} />
                            </div>
                            <PersonalInfoInputs data={user} handleChange={handleChange} prefix="" />
                        </div>

                        <div className="col-11 mx-auto">
                            <h4 className="mt-1">Lugar de Residencia</h4>
                            <div className="d-flex-column">
                                <SelectorCountryCity user={user} handleChange={handleChange} Contry={SelectorCountryCity} />
                                <div className="col-12 d-flex">
                                    <label className="form-label mx-1 my-auto" htmlFor="homeAddress">Dirección</label>
                                    <input className="form-control m-1" id="homeAddress" value={user.homeAddress || ''} onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-5'>

                        <div className="col-11 mx-auto">
                            <h4 className="mb-2">Contacto en caso de emergencia</h4>
                            <PersonalInfoInputs data={user} handleChange={handleChange} prefix="EmergencyContact" />
                        </div>
                        <div className="col-11 mx-auto ">
                            <h4 className='mt-1'>Cuenta de usuario</h4>
                            <div className='col-12' >
                                <div className='col-12 d-flex'>
                                    <label className="form-label col-4 mx-1 my-auto" htmlFor="userName">Usuario</label>
                                    <input className="form-control m-1" id="userName" value={user.userName || ''} onChange={handleChange} />
                                </div>
                                <div className='col-12 d-flex'>
                                    <label className="form-label col-4 mx-1 my-auto" htmlFor="password">Contraseña</label>
                                    <input type='password' className="form-control m-1" id="password" value={user.password || ''} onChange={handleChange} />
                                </div>
                                <div className='col-12 d-flex'>
                                    <label className="form-label col-4 mx-1 my-auto" htmlFor="password">Confirmar Contraseña</label>
                                    <input type='password' className="form-control m-1" id="password" value={user.password || ''} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-1">
                    <button type="button" className="btn btn-secondary col-2 m-2">Eliminar usuario</button>
                    <button type="submit" className="btn btn-primary m-2 col-2">Guardar</button>

                </div>
            </form>
        </div>
    );
};

export default EditUser;
