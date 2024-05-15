//src\renderer\src\server\config\db.config.ts
// src/config/db.config.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbpos', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log, // Aquí activas el logging
});

export default sequelize;
