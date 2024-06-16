// src/renderer/src/server/utils/generateAccessToken.ts
import jwt from 'jsonwebtoken';

// Utiliza una variable de entorno para la clave secreta
// deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
const JWT_SECRET = process.env.JWT_SECRET || "my_super_secret_key";

interface User {
  idUser: number;
  idAccount: number;
  idProfile: number;
}

function generateAccessToken(data: User): string {
  return jwt.sign(
    { data },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export default generateAccessToken;
