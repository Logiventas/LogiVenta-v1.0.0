//src\renderer\src\client\controller\userConext.controller.ts

import getUserData from '../services/userContexts.service';
import userContexts from '../model/userContexts.model';

class UserContextController {
  async fetchUserData(): Promise<userContexts> {
    try {
      const userData = await getUserData();
      console.log('Datos de contexto :', userData);
      return userData;
    } catch (error) {
      console.error('Error fetching user data in controller:', error);
      throw error;
    }
  }
}

export default new UserContextController();
