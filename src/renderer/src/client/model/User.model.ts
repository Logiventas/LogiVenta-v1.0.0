//src\renderer\src\client\model\User.model.ts

interface Acceso {
    gestionArchivo: boolean;
    gestionSistema: boolean;
    gestionCaja: boolean;
    gestionUsuairo: boolean;
    gestionIventario: boolean;
    gestionProveedores: boolean;
    registroVentas: boolean;
  }
  
  interface UserModel {
    idUser: string;
    firstName: string;
    secondName: string;
    surname: string;
    secondSurname: string;
    email: string;
    userName: string;
    acceso: Acceso;
  }
  
  export default UserModel;
  