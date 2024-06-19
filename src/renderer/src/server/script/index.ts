import sequelize from "../config/db.config"; // Asegúrate de que la ruta sea correcta
import loadCountries from './loadCountries';
import loadCities from './loadCities';
import loadJobs from './loadJobs';
import loadProfiles from './loadProfile';
import loadPermissions from './loadPermissions';
import loadUser from './loadUser';
import loadAdmin from "./loadAccounts";
import loadAdminPermission from './loadAdminPermissions';
import loadResidence from "./loadResidence";
import loadContact from "./loadContactEmergency";

const initializeDatabase = async () => {
  try {
    // Sincroniza la base de datos
    await sequelize.sync({ force: false }); // Cambia a 'true' solo si quieres recrear las tablas
    console.log("Base de datos sincronizada correctamente");

    // Cargar datos secuencialmente
    let success = await loadCountries();
    if (!success) {
      console.error("Fallo en la carga de países");
      return false;
    }

    success = await loadCities();
    if (!success) {
      console.error("Fallo en la carga de ciudades");
      return false;
    }

    success = await loadJobs();
    if (!success) {
      console.error("Fallo en la carga de trabajos");
      return false;
    }

    success = await loadProfiles();
    if (!success) {
      console.error("Fallo en la carga de perfiles");
      return false;
    }


    success = await loadPermissions();

    if (!success) {
      console.error("Fallo en la carga de permisos");
      return false;
    }
    success = await loadAdmin();
    if (!success) {
      console.error("Fallo en la carga de administradores");
      return false;
    }
    success = await loadUser();
    if (!success) {
      console.error("Fallo en la carga de usuarios");
      return false;
    }


    success = await loadAdminPermission();
    if (!success) {
      console.error("Fallo en la carga de permisos de administrador");
      return false;
    }
    success = await loadResidence();
    if (!success) {
      console.error("Fallo en la carga de residencias");
      return false;
    }

    success = await loadContact();
    if (!success) {
      console.error("Fallo en la carga de contactos");
      return false;
    }


    console.log("Base de datos inicializada correctamente");
    return true;
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    return false;
  }
};

export default initializeDatabase;
