import React, { useState } from 'react';
import  User  from "../editUser/models/User.model";
import ProfilePicture from './components/ProfilePicture.component';
import { SelectorCountryCity } from './components/SelectorCountryCity.component';
import PersonalInfoInputs from './components/PersonalInfoInputs.component';
import { countries } from './models/Country.model';
import { SelectProfile } from './components/SelectProfile.component';
import { SelectJob } from './components/SelectJob.component';
import { TituloModulo } from '@renderer/client/components/TitleModule.component';

import imagen from '@renderer/assets/icon/userManagmen.png';

const exampleUser: User = {
    id:0,
    idUser: 0,
    identification: 0,
    firstName: "",
    secondName: "",
    surname: "",
    secondSurname: "",
    email: "",
    profile: 0,
    account:0,
    phone: 255,
    homeCountry:1,
    homeCity: 1,
    homeAddress: "",
    profilePicture: null,
    job: 0,
    sex: '',
    emergencyFirstName:"",
    emergencySecondName: "",
    emergencySurname: "",
    emergencySecondSurname:"",
    emergencyEmail:"",
    emergencyPhone:555,
    password:"",
    userName:""
};

const newUser = () => {

    console.log('Edit User')
    const [user, setUser] = useState<any>(exampleUser);
    const [profilePicture, setProfilePicture] = useState<File | null>(null);

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
            <TituloModulo titulo="Nuevo Usuario" img={imagen} />
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

                    <div className="d-flex flex-column">
                        <div className="col-12">
                            <div className="row mx-auto">
                                <div className="col-5 mx-auto">
                                    <h4 className="mb-2">Datos Básicos</h4>
                                    <div className="d-flex">
                                        <label className="form-label col-7 m-auto" htmlFor="identification">Identificación</label>
                                        <input type="text" className="form-control ms-1 my-1" id="identification" value={user.identification || ''} onChange={handleChange} />
                                    </div>
                                    <PersonalInfoInputs data={user} handleChange={handleChange} prefix="" />
                                </div>
                                <div className="col-5 mx-auto">
                                    <h4 className="mb-2">Contacto en caso de emergencia</h4>
                                    <PersonalInfoInputs data={user} handleChange={handleChange} prefix="EmergencyContact" />
                                </div>
                            </div>
                            <div className="row mx-auto">
                                <div className="col-5 mx-auto">
                                    <h4 className="mt-1">Lugar de Residencia</h4>
                                    <div className="d-flex-column">
                                        <SelectorCountryCity user={user} handleChange={handleChange} Contry={countries} />
                                        <div className="col-10 d-flex">
                                            <label className="form-label mx-1 my-auto" htmlFor="homeAddress">Dirección</label>
                                            <input className="form-control m-1" id="homeAddress" value={user.homeAddress || ''} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 mx-auto">
                                    <h4 className='mt-1'>Cuenta de usuario</h4>
                                    <div className='col-12 d-flex'>
                                        <label className="form-label mx-1 my-auto" htmlFor="userName">Nombre de usuario</label>
                                        <input className="form-control m-1" id="userName" value={user.userName || ''} onChange={handleChange} />
                                    </div>
                                    <div className='col-12 d-flex'>
                                        <label className="form-label col-3 mx-1 my-auto" htmlFor="password">Contraseña</label>
                                        <input type='password' className="form-control m-1" id="password" value={user.password || ''} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary mx-5">Guardar</button>
         
                </div>
            </form>
        </div>
    );
};

export default newUser;
