import City from "../models/City.model"; 

const cities = [
  { countryId: 1, name: null },
  
  // Argentina
  { countryId: 2, name: "Buenos Aires" },
  { countryId: 2, name: "Córdoba" },
  { countryId: 2, name: "Rosario" },
  { countryId: 2, name: "Mendoza" },
  { countryId: 2, name: "La Plata" },
  
  // Bolivia
  { countryId: 3, name: "La Paz" },
  { countryId: 3, name: "Santa Cruz de la Sierra" },
  { countryId: 3, name: "Cochabamba" },
  { countryId: 3, name: "Sucre" },
  { countryId: 3, name: "Oruro" },
  
  // Chile
  { countryId: 4, name: "Santiago" },
  { countryId: 4, name: "Valparaíso" },
  { countryId: 4, name: "Concepción" },
  { countryId: 4, name: "La Serena" },
  { countryId: 4, name: "Antofagasta" },
  
  // Colombia
  { countryId: 5, name: "Bogotá" },
  { countryId: 5, name: "Medellín" },
  { countryId: 5, name: "Cali" },
  { countryId: 5, name: "Barranquilla" },
  { countryId: 5, name: "Cartagena" },
  
  // Costa Rica
  { countryId: 6, name: "San José" },
  { countryId: 6, name: "Alajuela" },
  { countryId: 6, name: "Cartago" },
  { countryId: 6, name: "Heredia" },
  { countryId: 6, name: "Liberia" },
  
  // Cuba
  { countryId: 7, name: "La Habana" },
  { countryId: 7, name: "Santiago de Cuba" },
  { countryId: 7, name: "Camagüey" },
  { countryId: 7, name: "Holguín" },
  { countryId: 7, name: "Guantánamo" },
  
  // Ecuador
  { countryId: 8, name: "Quito" },
  { countryId: 8, name: "Guayaquil" },
  { countryId: 8, name: "Cuenca" },
  { countryId: 8, name: "Santo Domingo" },
  { countryId: 8, name: "Machala" },
  
  // El Salvador
  { countryId: 9, name: "San Salvador" },
  { countryId: 9, name: "Santa Ana" },
  { countryId: 9, name: "Soyapango" },
  { countryId: 9, name: "San Miguel" },
  { countryId: 9, name: "Mejicanos" },
  
  // España
  { countryId: 10, name: "Madrid" },
  { countryId: 10, name: "Barcelona" },
  { countryId: 10, name: "Valencia" },
  { countryId: 10, name: "Sevilla" },
  { countryId: 10, name: "Zaragoza" },
  
  // Guatemala
  { countryId: 11, name: "Ciudad de Guatemala" },
  { countryId: 11, name: "Mixco" },
  { countryId: 11, name: "Villa Nueva" },
  { countryId: 11, name: "Quetzaltenango" },
  { countryId: 11, name: "Escuintla" },
  
  // Honduras
  { countryId: 12, name: "Tegucigalpa" },
  { countryId: 12, name: "San Pedro Sula" },
  { countryId: 12, name: "Choloma" },
  { countryId: 12, name: "La Ceiba" },
  { countryId: 12, name: "El Progreso" },
  
  // México
  { countryId: 13, name: "Ciudad de México" },
  { countryId: 13, name: "Guadalajara" },
  { countryId: 13, name: "Monterrey" },
  { countryId: 13, name: "Puebla" },
  { countryId: 13, name: "Tijuana" },
  
  // Nicaragua
  { countryId: 14, name: "Managua" },
  { countryId: 14, name: "León" },
  { countryId: 14, name: "Masaya" },
  { countryId: 14, name: "Chinandega" },
  { countryId: 14, name: "Matagalpa" },
  
  // Panamá
  { countryId: 15, name: "Ciudad de Panamá" },
  { countryId: 15, name: "San Miguelito" },
  { countryId: 15, name: "Tocumen" },
  { countryId: 15, name: "David" },
  { countryId: 15, name: "Arraiján" },
  
  // Paraguay
  { countryId: 16, name: "Asunción" },
  { countryId: 16, name: "Ciudad del Este" },
  { countryId: 16, name: "San Lorenzo" },
  { countryId: 16, name: "Luque" },
  { countryId: 16, name: "Capiatá" },
  
  // Perú
  { countryId: 17, name: "Lima" },
  { countryId: 17, name: "Arequipa" },
  { countryId: 17, name: "Trujillo" },
  { countryId: 17, name: "Chiclayo" },
  { countryId: 17, name: "Piura" },
  
  // República Dominicana
  { countryId: 18, name: "Santo Domingo" },
  { countryId: 18, name: "Santiago de los Caballeros" },
  { countryId: 18, name: "San Pedro de Macorís" },
  { countryId: 18, name: "La Romana" },
  { countryId: 18, name: "Puerto Plata" },
  
  // Uruguay
  { countryId: 19, name: "Montevideo" },
  { countryId: 19, name: "Salto" },
  { countryId: 19, name: "Paysandú" },
  { countryId: 19, name: "Maldonado" },
  { countryId: 19, name: "Rivera" },
  
  // Venezuela
  { countryId: 20, name: "Caracas" },
  { countryId: 20, name: "Maracaibo" },
  { countryId: 20, name: "Valencia" },
  { countryId: 20, name: "Barquisimeto" },
  { countryId: 20, name: "Maracay" }
];
const loadCities = async (): Promise<boolean> => {
  try {
    for (const city of cities) {
      const existingCity = await City.findOne({ where: { name: city.name, countryId: city.countryId } });
      if (!existingCity) {
        await City.create(city);
      }
    }
    console.log("Ciudades cargadas exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar las ciudades:", error);
    return false;
  }
};

export default loadCities;
