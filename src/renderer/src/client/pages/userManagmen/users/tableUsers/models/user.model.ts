//src\renderer\src\client\pages\userManagmen\users\tableUsers\models\TableUsers.model.ts
import User from '@client/model/User.model';

interface user extends User {
    identification:number
    email: string;
    phone1: number;
    profile:string
    job:string
}


export type { user };
