// src/renderer/src/server/models/permission.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface PermissionAttributes {
  id: string;
  name?: string | null;
  description?: string | null;
}

export class Permission extends Model<PermissionAttributes> implements PermissionAttributes {
  public id!: string;
  public name?: string | null;
  public description?: string | null;
}

Permission.init(
  {
    id: {
      type: DataTypes.STRING(8),
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(254),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Permission",
    tableName: "permissions", // Usar plural para el nombre de la tabla
    timestamps: false,
  }
);

export default Permission;
