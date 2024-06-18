import { getUser } from '../services/getUser.service'
import User from "../models/User.model";

export const getUserAdapter = async (id: any): Promise<User> => {
    try {
        // Verificar que el id no sea undefined y convertirlo a número
        const numericIdUser = id ? parseInt(id, 10) : null;
    
        // Si la conversión es exitosa, proceder con la obtención del usuario
        if (numericIdUser !== null && !isNaN(numericIdUser)) {
            const userData = await getUser(numericIdUser);
            const data = userData.data;
            console.log('DATOS DE USUARIO: ',data)
            const user: User = {
                idUser: data.id,
                identification: data.identification , 
                account: data.account,
                firstName: data.firstName , 
                secondName: data.secondName , 
                surname: data.surname , 
                secondSurname: data.secondSurname ,
                email: data.mail , 
                phone: data.phone , 
                profile: data.profile , 
                job: data.job , 
                homeCountry: data.country , 
                homeCity: data.city , 
                homeAddress: data.residence ,
                profilePicture: data.profilePicture , 
                sex: data.sex ,
                userName: data.userName , 
                password: data.password, 
                emergencyFirstName: data.firstNameContact ,
                emergencySecondName: data.secondNameContact,
                emergencySurname: data.surnameContact,
                emergencySecondSurname: data.secondSurnameContact,
                emergencyPhone: data.phoneContact,
                emergencyEmail: data.mailContact,
            };
            return user;
        } else {
            console.error('El ID del usuario no es válido');
            throw new Error('El ID del usuario no es válido');
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};
