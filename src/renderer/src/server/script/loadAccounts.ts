// src/renderer/src/server/script/loadAdminUser.ts
import sequelize from "../config/db.config";
import Account from "../models/Account.model";
import crypto from "crypto";

async function hashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}

async function loadAdmin(): Promise<boolean> {
  try {
    // Conexión a la base de datos
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");

    // Sincronizar modelos
    await sequelize.sync();

    // Verifica si ya existe un usuario administrador
    const existingAdmin = await Account.findOne({ where: { name: "admin" } });
    if (existingAdmin) {
      console.log(
        "Un usuario administrador ya existe:",
        existingAdmin.toJSON()
      );
      return true; // Retorna el usuario existente o lanza un error según lo desees.
    }

    // Generar una sal y hashear la contraseña del administrador
    const salt = crypto.randomBytes(16).toString("hex");
    // deepcode ignore HardcodedSecret: <please specify a reason of ignoring this>
    const hashedPassword = await hashPassword("admin123", salt);

    // Crear un nuevo usuario administrador (Account)
    await Account.create({
      id: 1, // Asegúrate de que no hay conflicto de IDs
      password: hashedPassword,
      name: "admin",
      state: true,
      creationDate: new Date(),
      profileId: 1,
    });

    return true;
  } catch (error) {
    return false;
  }
}

export default loadAdmin;
