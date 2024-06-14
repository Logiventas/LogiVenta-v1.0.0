//
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config";
import Job from "../models/Job.model"; 
import ContactEmergency from "./ContactEmergency.model";
import Residence from "./Residence.model";

interface UserAttributes {
  id?: number|null;
  firstName?: string | null;
  secondName?: string | null;
  surname?: string | null;
  secondSurname?: string | null;
  birthDate?: string | null;
  identification?: number | null;
  phone?: number | null;
  mail?: string | null;
  sex?: string | null;
  accountId?: number | null;
  jobId?: number | null;
  photo?: File | null; // Añadido el tipo para photo
  
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number;
  public firstName?: string | null;
  public secondName?: string | null;
  public surname?: string | null;
  public secondSurname?: string | null;
  public birthDate?: string | null;
  public identification?: number | null;
  public phone?: number | null;
  public mail?: string | null;
  public sex?: string | null;
  public accountId?: number | null;
  public jobId?: number | null;
  public Account?: any; // Relación con Account
  public Job?: any; // Relación con Job
  public photo?: File | null; // Corregido el tipo para photo
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    birthDate: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    identification: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING(65),
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    photo: {
      type: DataTypes.BLOB, // Ajustado para almacenar archivos binarios
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
    timestamps: false,
  }
);

// Relación entre User y Job
// Un trabajo (Job) puede pertenecer a muchos usuarios (User)
Job.hasMany(User, {
  foreignKey: "jobId",
  sourceKey: "id",
});

// Un usuario (User) tiene un trabajo (Job)
User.belongsTo(Job, {
  foreignKey: "jobId",
  targetKey: "id",
});

// Relación entre User y ContactEmergency
//un usuario (User) puede tner muchos contactos de emegencia (ContactEmergency) 
User.hasMany(ContactEmergency,{
  foreignKey: "idUser",
  sourceKey: "id",
})

ContactEmergency.belongsTo(User,{
  foreignKey: "idUser",
  targetKey: "id",
})

// Relación entre User y Recidencia
User.hasOne(Residence,{
  foreignKey: "userId",
  sourceKey: "id",
})

Residence.belongsTo(User,{
  foreignKey: "userId",
  targetKey: "id",
})


export default User;