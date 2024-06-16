import { Request, Response, NextFunction } from 'express';
import { authorization } from '../../services/authorization.service';

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  const permissionCode = req.headers['x-permission-code'] as string;

  if (!permissionCode) {
    return res.status(400).json({ message: "Permission code is missing" });
  }

  const { idProfile } = req.user.data;

  try {
    console.log(permissionCode)
    const isAuthorized = await authorization(idProfile, permissionCode);
    console.log(isAuthorized)
    if (isAuthorized===true) {
      next();
      console.log('Usuario autorizado')
    } else {
      return res.status(401).json({ message: "You don't have permission" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
