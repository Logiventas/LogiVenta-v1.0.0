//src\renderer\src\server\config\db.config.ts

import dotenv from "dotenv";
import { Sequelize } from "sequelize";
// Cargar variables de entorno desde el archivo .env
dotenv.config();
const sequelize = new Sequelize(
  (process.env.DB_NAME as string) ?? "dbpos",
  (process.env.DB_USER as string) ?? "root",
  (process.env.DB_PASSWORD as string) ?? "12345",
  {
    host: process.env.DB_HOST as string ?? "localhost",
    dialect: process.env.DB_DIALECT as any ?? "mysql",
    logging: console.log,
  }
);

export default sequelize;
