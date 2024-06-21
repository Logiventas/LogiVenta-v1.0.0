import Country from "../models/Country.model";
const countries = [
  { id: 1, name: null },
  { id: 2, name: "Argentina" },
  { id: 3, name: "Bolivia" },
  { id: 4, name: "Chile" },
  { id: 5, name: "Colombia" },
  { id: 6, name: "Costa Rica" },
  { id: 7, name: "Cuba" },
  { id: 8, name: "Ecuador" },
  { id: 9, name: "El Salvador" },
  { id: 10, name: "España" },
  { id: 11, name: "Guatemala" },
  { id: 12, name: "Honduras" },
  { id: 13, name: "México" },
  { id: 14, name: "Nicaragua" },
  { id: 15, name: "Panamá" },
  { id: 16, name: "Paraguay" },
  { id: 17, name: "Perú" },
  { id: 18, name: "República Dominicana" },
  { id: 19, name: "Uruguay" },
  { id: 20, name: "Venezuela" }
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
