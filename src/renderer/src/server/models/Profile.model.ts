import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta
import PermissionProfile from "./ProfilePermission.model"; // Asegúrate de que la ruta sea correcta

interface ProfileAttributes {
  id: number;
  name?: string | null;
  description?: string | null;

}

interface ProfileCreationAttributes extends Optional<ProfileAttributes, "id"> {}

export class Profile extends Model<ProfileAttributes, ProfileCreationAttributes> implements ProfileAttributes {
  public id!: number;
  public name?: string | null;
  public description?: string | null;
}

Profile.init(
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
    description: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Profile",
    tableName: "Profile",
    timestamps: false,
  }
);

// Definición de asociaciones
Profile.hasMany(PermissionProfile, {
  foreignKey: "profileId",
  sourceKey: "id",
});

PermissionProfile.belongsTo(Profile, {
  foreignKey: "profileId",
  targetKey: "id",
});

export default Profile;
