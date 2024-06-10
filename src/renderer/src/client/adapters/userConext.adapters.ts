//src\renderer\src\client\controller\userConext.controller.ts

import getUserData from '../services/userConext.service';
import userContexts from '../model/UserContexts.model';

class UserContextController {
  async fetchUserData(): Promise<userContexts> {
    try {
      const userData = await getUserData();
      console.log('Fetched User Data in Controller:', userData);
      return userData;
    } catch (error) {
      console.error('Error fetching user data in controller:', error);
      throw error;
    }
  }
}

export default new UserContextController();
