import { Request, Response } from "express";
import { getUser } from "../../../services/getUser.service";
import { userPermissions } from "../../../services/userPermissions.service";
import jwt from 'jsonwebtoken';

const getUserDataController = async (req: Request, res: Response) => {
  const JWT_SECRET = process.env.JWT_SECRET || "my_super_secret_key";
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const userId = decoded.user.id;

    const user = await getUser(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const id:any = user.dataValues.accountId

    // Obtener permisos del usuario
    const permissions = await userPermissions(id);
    
    const access: { [key: string]: boolean } = {};
    permissions.forEach((permiso) => {
      access[permiso.permissionsId] = permiso.state;
    });

    const username = `${user.dataValues.firstName} ${user.dataValues.surname}`;
    const userData = {
      idUser: user.dataValues.id,
      firstName: user.dataValues.firstName,
      secondName: user.dataValues.secondName,
      surname: user.dataValues.surname,
      secondSurname: user.dataValues.secondSurname,
      userName: username,
      access: {...access},
    };

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error en getUserDataController:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default getUserDataController;
