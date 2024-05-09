// src/config/db.ts
import mysql from 'mysql2/promise';

export async function getConnection() {
  // Crea la conexión
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    port: 4000,
    password: 'admin',
    database: 'dlogiventa',
  });

  return connection;
}
