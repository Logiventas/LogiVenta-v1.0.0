//src\renderer\src\client\pages\userManagmen\profiles\newProfile\models\profile.model.ts
import { Permission } from './permission.model';

export interface Profile {
  id:number;
  name: string;
  description: string;
  permissions: Permission[];
}
