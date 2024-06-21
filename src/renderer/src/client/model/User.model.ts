//src\renderer\src\client\model\User.model.ts
interface User {
      /** ID único */
      idUser: number;
    
      /** Primer nombre del usuario */
      firstName: string;
    
      /** Segundo nombre del usuario (opcional) */
      secondName?: string | null;
    
      /** Primer apellido del usuario */
      surname: string;
    
      /** Segundo apellido del usuario (opcional) */
      secondSurname?: string | null;

      sex?: string;
    }
    
    export default User;
    