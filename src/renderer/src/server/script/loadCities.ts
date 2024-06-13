import City from "../models/City.model"; 

const cities = [
  { countryId: 1, name: "Buenos Aires" },
  { countryId: 2, name: "La Paz" },
  { countryId: 3, name: "Santiago" },
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
