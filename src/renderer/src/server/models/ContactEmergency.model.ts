// src/renderer/src/server/models/contactEmergency.model.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

export interface ContactEmergencyAtributes{
  id: number|null;
  idUser: number|null;
  firstName?: string | null;
  secondName?: string | null;
  surname?: string | null;
  secondSurname?: string | null;
  mail?: string | null;
  phone?: number | null;
}

export class ContactEmergency extends Model<ContactEmergencyAtributes> implements ContactEmergencyAtributes {
  public id!: number|null;
  public idUser!: number|null;
  public firstName?: string | null;
  public secondName?: string | null;
  public surname?: string | null;
  public secondSurname?: string | null;
  public mail?: string | null;
  public phone?: number | null;
}

ContactEmergency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondSurname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ContactEmergency",
    tableName: "ContactEmergency",
    timestamps: false,
  }
);


export default ContactEmergency;
