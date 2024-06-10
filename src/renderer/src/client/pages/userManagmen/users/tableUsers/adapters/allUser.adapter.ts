//src\renderer\src\client\pages\userManagmen\users\tableUsers\adapters\TableUsers.adapter.ts
import { user } from '../models/user.model';
import  allUser  from '../services/allUser.service';

export const getUsers = async (): Promise<user[]> => {
    try {
        const users = await allUser();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
