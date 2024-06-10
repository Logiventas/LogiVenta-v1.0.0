import User from "./User.model";
import AccessUser from './AccessUser.model'

interface UserContexts extends User, AccessUser {
  userName: string;
}

export default UserContexts;
