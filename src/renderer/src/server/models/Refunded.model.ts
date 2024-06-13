// src/renderer/src/server/models/refunded.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface RefundedAttributes {
  id: number;
  date: Date;
  idAccount: number;
}

interface RefundedCreationAttributes extends Optional<RefundedAttributes, "id"> {}

export class Refunded extends Model<RefundedAttributes, RefundedCreationAttributes> implements RefundedAttributes {
  public id!: number;
  public date!: Date;
  public idAccount!: number;
}

Refunded.init(
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
    modelName: "Refunded",
    tableName: "Refunded",
    timestamps: false,
  }
);

export default Refunded;
