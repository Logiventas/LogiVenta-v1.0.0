//src\renderer\src\server\api\models\user.model.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/db.config"; // Verifica la ruta

// Define los atributos de User
interface UserAttributes {
  idUser: number;
  identification?: string | null;
  firstName: string;
  secondName?: string | null;
  surname: string;
  secondSurname?: string | null;
  email: string;
  userName: string;
  password: string;
  phone1?: string | null;
  phone2?: string | null;
  homeCountry?: string | null;
  homeCity?: string | null;
  homeAddress?: string | null;
  emergencyContactFirstName?: string | null;
  emergencyContactSecondName?: string | null;
  emergencyContactSurname?: string | null;
  emergencyContactSecondSurname?: string | null;
  emergencyContactEmail?: string | null;
  emergencyContactPhone1?: string | null;
  emergencyContactPhone2?: string | null;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define los atributos opcionales para la creación
interface UserCreationAttributes extends Optional<UserAttributes, "idUser" | "createdAt" | "updatedAt"> {}

// Define la clase User extendiendo de Model
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public idUser!: number;
  public identification?: string | null;
  public firstName!: string;
  public secondName?: string | null;
  public surname!: string;
  public secondSurname?: string | null;
  public email!: string;
  public userName!: string;
  public password!: string;
  public phone1?: string | null;
  public phone2?: string | null;
  public homeCountry?: string | null;
  public homeCity?: string | null;
  public homeAddress?: string | null;
  public emergencyContactFirstName?: string | null;
  public emergencyContactSecondName?: string | null;
  public emergencyContactSurname?: string | null;
  public emergencyContactSecondSurname?: string | null;
  public emergencyContactEmail?: string | null;
  public emergencyContactPhone1?: string | null;
  public emergencyContactPhone2?: string | null;
  public active!: boolean;
}

// Inicializa el modelo con la definición de los campos
User.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    identification: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeCountry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactFirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactSecondName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactSecondSurname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactPhone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactPhone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true, // Asegura que Sequelize maneje automáticamente las columnas createdAt y updatedAt
  }
);

// Sincroniza el modelo con la base de datos
User.sync()
  .then(() => {
    console.log("Tabla y modelo de usuarios creados con exito");
  })
  .catch((err) => {
    console.error("Error al crear la tabla y el modelo de usuarios:", err);
  });

export default User;
