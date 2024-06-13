// src/renderer/src/server/models/variableCharge.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface VariableChargeAttributes {
  id: number;
  nombre?: string | null;
  descripcion?: string | null;
  operacion?: string | null;
  percentage?: string | null;
  jobId: number; // Cambio de Position_id a jobId
}

interface VariableChargeCreationAttributes extends Optional<VariableChargeAttributes, "id"> {}

export class VariableCharge extends Model<VariableChargeAttributes, VariableChargeCreationAttributes> implements VariableChargeAttributes {
  public id!: number;
  public nombre?: string | null;
  public descripcion?: string | null;
  public operacion?: string | null;
  public percentage?: string | null;
  public jobId!: number; // Cambio de Position_id a jobId
}

VariableCharge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    percentage: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Cambio de Position_id a jobId
    },
  },
  {
    sequelize,
    modelName: "VariableCharge",
    tableName: "VariableCharge",
    timestamps: false,
  }
);

export default VariableCharge;
