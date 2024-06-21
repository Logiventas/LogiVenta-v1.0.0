//src\renderer\src\server\models\City.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta
import Country from "./Country.model"; // Verifica la ruta

interface CityAttributes {
  id: number|null;
  countryId:number;
  name?: string | null;
}



export class City extends Model<CityAttributes> implements CityAttributes {
  public id!: number;
  public name?: string | null;
  public countryId!: number;
}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },

  },
  {
    sequelize,
    modelName: "City",
    tableName: "City",
    timestamps: false,
  }
);

Country.hasMany(City,{
  foreignKey: 'countryId',
  sourceKey: 'id'
})
City.belongsTo(Country, {
  foreignKey: "countryId",
  targetKey: "id",
});

export default City;
