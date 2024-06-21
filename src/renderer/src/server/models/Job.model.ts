// src/renderer/src/server/models/position.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta
import FixedCharge from "../models/FixedCharge.model"; 
import VariableCharge from "../models/VariableCharge.model"; // Verifica la ruta
interface JobAttributes {
  id: number;
  salaryBase: number;
  name?: string | null;
  description?: string | null;
  paymentPeriod?: Date | null;
}

interface JobCreationAttributes extends Optional<JobAttributes, "id"> {}

export class Job extends Model<JobAttributes, JobCreationAttributes> implements JobAttributes {
  public id!: number;
  public salaryBase!: number;
  public name?: string | null;
  public description?: string | null;
  public paymentPeriod?: Date | null;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    salaryBase:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(254),
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "Job",
    tableName: "Job",
    timestamps: false,
  }
);

// Relación entre Job y FixedCharge
// Un trabajo (Job) tiene muchos cargos fijos (FixedCharge)
Job.hasMany(FixedCharge, {
  foreignKey: "idJob",
  sourceKey: "id",
});

// Un cargo fijo (FixedCharge) pertenece a un trabajo (Job)
FixedCharge.belongsTo(Job, {
  foreignKey: "idJob",
  targetKey: "id",
});

// Relación entre Job y VariableCharge
// Un trabajo (Job) tiene muchos cargos variables (VariableCharge)
Job.hasMany(VariableCharge, {
  foreignKey: "jobId",
  sourceKey: "id",
});

// Un cargo variable (VariableCharge) pertenece a un trabajo (Job)
VariableCharge.belongsTo(Job, {
  foreignKey: "jobId",
  targetKey: "id",
});


export default Job;
