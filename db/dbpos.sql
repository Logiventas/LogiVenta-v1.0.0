-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS dbpos;
USE dbpos;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    user VARCHAR(255) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL, -- Considerar encriptar las contraseñas
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    active BOOL NOT NULL DEFAULT TRUE
);

-- Crear tabla para registrar los inicios de sesión
CREATE TABLE IF NOT EXISTS registros_sesion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip VARCHAR(45), -- IP desde donde se realiza el inicio de sesión
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Insertar usuarios de ejemplo
INSERT INTO usuarios (nombre, apellido, email, user, contrasena, active) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'juanperez', SHA2('MiContraseña123!', 256), TRUE),
('Ana', 'García', 'ana.garcia@example.com', 'anagarcia', SHA2('OtraContraseña456!', 256), TRUE);

-- Insertar registros de sesión de ejemplo
INSERT INTO registros_sesion (usuario_id, ip) VALUES
(1, '192.168.1.1'),
(2, '192.168.1.2');
