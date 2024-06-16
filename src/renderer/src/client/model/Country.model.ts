import City from "@renderer/server/models/City.model";
export interface Country {
  id: number;
  name: string;
  cities: City[]; // Cambiado para permitir varias ciudades
}
