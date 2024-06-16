// src/renderer/src/server/services/login.service.ts
import Account from "../models/Account.model";
import crypto from "crypto";

async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, key] = storedHash.split(":");
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString("hex"));
    });
  });
}

export const loginService = async (name: string, password: string) => {
  try {
    const account = await Account.findOne({ where: { name } });

    if (!account) {
      return { success: false, status: 404, data: { ms: "Usuario no encontrado" } }; // Usuario no encontrado
    }
    if (!account.dataValues.password) {
      return { success: false, status: 400, data: { ms: "Contraseña no definida" } };
    }

    const isPasswordValid = await verifyPassword(password, account.dataValues.password);

    if (!isPasswordValid) {
      return { success: false, status: 401, data: { ms: "Contraseña incorrecta" } };
    } else {
      const { id, profileId, state } = account.dataValues;
      if (!state) {
        return { success: false, status: 401, data: { ms: "Usuario inactivo" } };
      }
      return { success: true, status: 200, data: { id, profileId } };
    }
  } catch (error) {
    return { success: false, status: 500, data: { ms: "Error en autenticación" } };
  }
};
