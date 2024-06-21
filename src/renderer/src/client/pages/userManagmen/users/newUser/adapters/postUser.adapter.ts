// src\renderer\src\client\pages\userManagmen\users\editUser\adapters\putUser.adapter.ts
import { postUser } from '../services/postUser.service';
import User from "../models/User.model";

export const postUserAdapter = async (user: User): Promise<any> => {


    try {
       const respose= await postUser({
            identification: user.identification,
            account: user.account,
            firstName: user.firstName,
            secondName: user.secondName,
            surname: user.surname,
            secondSurname: user.secondSurname,
            email: user.email,
            phone: user.phone,
            profile: user.profile,
            job: user.job,
            homeCountry: user.homeCountry,
            homeCity: user.homeCity,
            homeAddress: user.homeAddress,
            profilePicture: user.profilePicture,
            sex: user.sex,
            userName: user.userName,
            password: user.password,
            emergencyFirstName: user.emergencyFirstName,
            emergencySecondName: user.emergencySecondName,
            emergencySurname: user.emergencySurname,
            emergencySecondSurname: user.emergencySecondSurname,
            emergencyPhone: user.emergencyPhone,
            emergencyEmail: user.emergencyEmail
        });
 console.log('datos ',respose);
            return {success:respose.success , message:respose.message };

    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        throw error;
    }
};
