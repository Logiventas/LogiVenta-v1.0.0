// src/renderer/src/server/models/residence.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config";
import City from "./City.model";

interface ResidenceAttributes {

  userId: number;
  address?: string | null;
  cityId: number;
}



export class Residence extends Model<ResidenceAttributes> implements ResidenceAttributes {

  public userId!: number;
  public address?: string | null;
  public cityId!: number;
}

Residence.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Residence",
    tableName: "Residence",
    timestamps: false,
  }
);

City.hasMany(Residence,{
  foreignKey: "cityId",
  sourceKey:"id"
})
Residence.belongsTo(City, {
  foreignKey: "cityId",
  targetKey: "id",
});
export default Residence;
