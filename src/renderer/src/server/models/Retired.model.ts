// src/renderer/src/server/models/retired.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface RetiredAttributes {
  id: number;
  date: Date;
  idAccount: number;
}

interface RetiredCreationAttributes extends Optional<RetiredAttributes, "id"> {}

export class Retired extends Model<RetiredAttributes, RetiredCreationAttributes> implements RetiredAttributes {
  public id!: number;
  public date!: Date;
  public idAccount!: number;
}

Retired.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idAccount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Retired",
    tableName: "Retired",
    timestamps: false,
  }
);

export default Retired;
