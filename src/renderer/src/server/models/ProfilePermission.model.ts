//src\renderer\src\server\models\ProfilePermission.model.ts
import { DataTypes, Model} from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta
import Permission from "./Permission.model";

interface ProfilePermissionAttributes {
  id: number|null;
  profileId: number;
  permissionsId: string;
  state:boolean;
}

export class ProfilePermission extends Model<ProfilePermissionAttributes> implements ProfilePermissionAttributes {
  public id!: number;
  public profileId!: number;
  public permissionsId!: string;
  public state!: boolean;
}

ProfilePermission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permissionsId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProfilePermission",
    tableName: "ProfilePermission",
    timestamps: false,
  }
);

Permission.hasMany(ProfilePermission,{
  foreignKey: "permissionsId",
  sourceKey: "id"
})

ProfilePermission.belongsTo(Permission,{
  foreignKey: "permissionsId",
  targetKey: "id"
})
export default ProfilePermission;
 