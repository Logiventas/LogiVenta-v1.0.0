//src\renderer\src\server\models\Account.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; 
import User from "../models/User.model"; 
import Profile from "../models/Profile.model";
import Retired from "./Retired.model";
import Refunded from "./Refunded.model";

interface AccountAttributes {
  id: number;
  password?: string ;
  name?: string ;
  state?: boolean | null;
  creationDate?: Date | null;
  profileId:number
}

interface AccountCreationAttributes extends Optional<AccountAttributes, 'id'> {}

export class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
  public id!: number;
  public password?: string ;
  public name?: string ;
  public state?: boolean | null;
  public creationDate?: Date | null;
  public profileId!:number;
  
}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    password: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Account",
    tableName: "Account",
    timestamps: false,
  }
);

// Relación entre User y Account
User.belongsTo(Account, {
  foreignKey: "accountId",
  targetKey: "id",
});

// Un usuario (User) tiene una cuenta (Account)
Account.hasOne(User, {
  foreignKey: "accountId",
  sourceKey: "id",
});

// Relación entre Profile y Account
Account.belongsTo(Profile, {
  foreignKey: "profileId",
  targetKey: "id",
});

Profile.hasMany(Account, {
  foreignKey: "profileId",
  sourceKey: "id",
});

// Relación entre Retired y Account
Account.hasMany(Retired, {
  foreignKey: "accountId",
  sourceKey: "id",
});

// Relación entre Refunded y Account
Account.hasMany(Refunded, {
  foreignKey: "accountId",
  sourceKey: "id",
});

export default Account;