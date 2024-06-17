//src\renderer\src\server\config\db.config.ts
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as 'mysql' | 'mariadb' | 'postgres' | 'mssql',
    logging: console.log, // Aquí activas el logging
  }
);

export default sequelize;
