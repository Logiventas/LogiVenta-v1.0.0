// src\renderer\src\client\pages\userManagmen\users\editUser\adapters\putUser.adapter.ts
import { putUser } from '../services/putUser.service';
import User from "../models/User.model";

export const putUserAdapter = async (user: User): Promise<void> => {


    try {
        await putUser(user.idUser, {
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
    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        throw error;
    }
};
