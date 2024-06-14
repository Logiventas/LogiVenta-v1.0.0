//src\renderer\src\server\utils\generateAccessToken.ts
import jwt from 'jsonwebtoken';

// Utiliza una variable de entorno para la clave secreta
const JWT_SECRET = process.env.JWT_SECRET || "my_super_secret_key";

interface User {
  id: number;
  name: string;
  // Otros campos relevantes del usuario
}

function generateAccessToken(user: User|any): string {
  return jwt.sign(
    { user },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export default generateAccessToken;
