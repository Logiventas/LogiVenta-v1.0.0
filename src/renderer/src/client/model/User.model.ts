//src\renderer\src\client\model\User.model.ts

interface acceso {
  gestionArchivo: boolean;
  gestionSistema: boolean;
  gestionCaja: boolean;
  gestionUsuario: boolean;
  gestionInventario: boolean;
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
  acceso: acceso;
}

export default UserModel;
