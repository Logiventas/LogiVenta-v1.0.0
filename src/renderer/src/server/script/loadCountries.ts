import Country from "../models/Country.model"; 

const countries = [
  { name: null },
  { name: "Argentina" },
  { name: "Bolivia" },
  { name: "Chile" },
  // Añade más países según sea necesario
];

const loadCountries = async (): Promise<boolean> => {
  try {
    for (const country of countries) {
      const existingCountry = await Country.findOne({ where: { name: country.name } });
      if (!existingCountry) {
        await Country.create(country);
      }
    }
    console.log("Países cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los países:", error);
    return false;
  }
};

export default loadCountries;
