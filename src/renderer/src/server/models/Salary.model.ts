// src/renderer/src/server/models/salary.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface SalaryAttributes {
  id: number;
  idJob: number;
  idUser: number;
  baseSalary:number;

}

interface SalaryCreationAttributes extends Optional<SalaryAttributes, "id"> {}

export class Salary extends Model<SalaryAttributes, SalaryCreationAttributes> implements SalaryAttributes {
  public id!: number;
  public idUser!: number;
  public idJob!: number;
  public baseSalary!: number;
}

Salary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    baseSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idJob: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Salary",
    tableName: "Salary",
    timestamps: false,
  }
);

export default Salary;
