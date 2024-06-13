// src/renderer/src/server/models/country.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config"; 

interface CountryAttributes {
  id: number|null;
  name?: string | null;
}



export class Country extends Model<CountryAttributes> implements CountryAttributes {
  public id!: number;
  public name?: string | null;
}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Country",
    tableName: "Country",
    timestamps: false,
  }
);



export default Country;
