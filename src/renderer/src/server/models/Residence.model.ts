// src/renderer/src/server/models/residence.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config";
import City from "./City.model";

interface ResidenceAttributes {
  id: number;
  userId: number;
  address?: string | null;
  cityId: number;
}

interface ResidenceCreationAttributes extends Optional<ResidenceAttributes, "id"> {}

export class Residence extends Model<ResidenceAttributes, ResidenceCreationAttributes> implements ResidenceAttributes {
  public id!: number;
  public userId!: number;
  public address?: string | null;
  public cityId!: number;
}

Residence.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Residence",
    tableName: "Residence",
    timestamps: false,
  }
);

City.hasMany(Residence,{
  foreignKey: "cityId",
  sourceKey:"id"
})

export default Residence;
