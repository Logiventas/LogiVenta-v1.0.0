// src/renderer/src/server/models/fixedCharge.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface FixedChargeAttributes {
  id: number;
  idJob: number;
  nombre?: string | null;
  descripcion?: string | null;
  operacion?: string | null;
  monto?: string | null;
}

interface FixedChargeCreationAttributes extends Optional<FixedChargeAttributes, "id"> {}

export class FixedCharge extends Model<FixedChargeAttributes, FixedChargeCreationAttributes> implements FixedChargeAttributes {
  public id!: number;
  public idJob!: number;
  public nombre?: string | null;
  public descripcion?: string | null;
  public operacion?: string | null;
  public monto?: string | null;
}

FixedCharge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idJob: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    operacion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    monto: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "FixedCharge",
    tableName: "FixedCharge",
    timestamps: false,
  }
);

export default FixedCharge;
