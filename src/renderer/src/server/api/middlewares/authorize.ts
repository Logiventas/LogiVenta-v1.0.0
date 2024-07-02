import { Request, Response, NextFunction } from 'express';
import { authorization } from '../../services/userManagmen/profiles/security/authorization.service';

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  const permissionCode = req.headers['x-permission-code'] as string;

  if (!permissionCode) {
    return res.status(401).json({ message: "Falta el código de permiso" });
  }

  const { idProfile } = req.user.data;

  try {

    const isAuthorized = await authorization(idProfile, permissionCode);
    
    if (isAuthorized===true) {
      next();
    } else {
      return res.status(403).json({ message: "no tienes permiso" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error Interno del Servidor" });

  }
};
