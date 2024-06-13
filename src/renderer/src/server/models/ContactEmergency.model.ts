// src/renderer/src/server/models/contactEmergency.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db.config"; // Verifica la ruta

interface ContactEmergencyAttributes {
  id: number;
  idUser: number;
  firstName?: string | null;
  secondName?: string | null;
  surname?: string | null;
  secondSurname?: string | null;
  mail?: string | null;
  phone?: string | null;
}

interface ContactEmergencyCreationAttributes extends Optional<ContactEmergencyAttributes, "id"> {}

export class ContactEmergency extends Model<ContactEmergencyAttributes, ContactEmergencyCreationAttributes> implements ContactEmergencyAttributes {
  public id!: number;
  public idUser!: number;
  public firstName?: string | null;
  public secondName?: string | null;
  public surname?: string | null;
  public secondSurname?: string | null;
  public mail?: string | null;
  public phone?: string | null;
}

ContactEmergency.init(
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
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    secondName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    secondSurname: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true,
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
