//src\renderer\src\server\api\controllers\Users\setUser.controller.ts
import { Request, Response } from 'express';
import { setUser } from '../../../services/setUser.service';

export const setUserController = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;

    // Validar que se envíen los campos necesarios
    if (!userInput.identification) {
      return res.status(400).json({ message: "El campo 'identification' es requerido.",data:{}});
    }

    // Llamar al servicio setUser
    const newUser = await setUser(userInput);

    if (newUser) {
      return res.status(201).json({ message: 'Usuario creado exitosamente'});
    } else {
      return res.status(400).json({ message: 'No se pudo crear el usuario.' });
    }
  } catch (error) {
    console.error('Error en setUserController:', error);
    return res.status(500).json({ message: 'Error al crear el usuario.' });
  }
};
