import { Request, Response } from "express";
import { getUserContext } from "../../../../../services/userManagmen/users/login/getUserContext.service";
import { userPermissions } from "../../../../../services/userManagmen/profiles/security/userPermissions.service";
const getUserDataController = async (req: Request, res: Response) => {

  try {
    console.log( 'UserDataContexs controlador: ', req.user)
    const userId = req.user.data.idUser;
    const idAccount = req.user.data.idAccount
    const user = await getUserContext(userId);
    const permissions = await userPermissions(idAccount);

    if(user.status){
      const access: { [key: string]: boolean } = {};
      permissions.forEach((permiso) => {
        access[permiso.permissionsId] = permiso.state;
      });
      const username=  user.data.firstName+' '+user.data.surname
      const userData = {
        idUser: user.data.id,
        firstName: user.data.firstName,
        secondName: user.data.secondName,
        surname: user.data.surname,
        secondSurname: user.data.secondSurname,
        userName: username,
        access: {...access},
      };
          return res.status(200).json(userData);

    }else{
      return res.status(401).json({ message: "Usuario no autorizado" });
    }

      
  } catch (error) {
    console.error("Error en getUserDataController:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default getUserDataController;
