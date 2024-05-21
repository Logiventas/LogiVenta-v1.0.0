//src\renderer\src\server\api\models\UserPermission.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db.config";

interface UserPermissionAttributes {
  id: number;
  userId: number;
  gestionArchivo: boolean;
  gestionSistema: boolean;
  gestionCaja: boolean;
  gestionUsuario: boolean;
  gestionInventario: boolean;
  gestionProveedores: boolean;
  registroVentas: boolean;
}

class UserPermission extends Model<UserPermissionAttributes> implements UserPermissionAttributes {
  public id!: number;
  public userId!: number;
  public gestionArchivo!: boolean;
  public gestionSistema!: boolean;
  public gestionCaja!: boolean;
  public gestionUsuario!: boolean;
  public gestionInventario!: boolean;
  public gestionProveedores!: boolean;
  public registroVentas!: boolean;
}

UserPermission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true, 
    },
    gestionArchivo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gestionSistema: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gestionCaja: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gestionUsuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gestionInventario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    gestionProveedores: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    registroVentas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    modelName: "UserPermission",
    tableName: "userPermissions",
    timestamps: false,
  }
);

UserPermission.sync()
  .then(() => {
    console.log("Tabla y modelo de permisos de usuario creados con éxito");
  })
  .catch((err) => {
    console.error("Error al crear la tabla y el modelo de permisos de usuario:", err);
  });

export { UserPermission };
