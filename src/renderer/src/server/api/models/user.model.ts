import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db.config"; // Verifica la ruta

// Define la clase sin campos públicos explícitos
export class User extends Model {}

// Inicializa el modelo con la definición de los campos
User.init(
  {
    idUser: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    identification: { type: DataTypes.STRING, allowNull: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    secondName: { type: DataTypes.STRING, allowNull: true },
    surname: { type: DataTypes.STRING, allowNull: false },
    secondSurname: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    userName: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone1: { type: DataTypes.STRING, allowNull: true },
    phone2: { type: DataTypes.STRING, allowNull: true },
    homeCountry: { type: DataTypes.STRING, allowNull: true },
    homeCity: { type: DataTypes.STRING, allowNull: true },
    homeAddress: { type: DataTypes.STRING, allowNull: true },
    emergencyContactFirstName: { type: DataTypes.STRING, allowNull: true },
    emergencyContactSecondName: { type: DataTypes.STRING, allowNull: true },
    emergencyContactSurname: { type: DataTypes.STRING, allowNull: true },
    emergencyContactSecondSurname: { type: DataTypes.STRING, allowNull: true },
    emergencyContactEmail: { type: DataTypes.STRING, allowNull: true },
    emergencyContactPhone1: { type: DataTypes.STRING, allowNull: true },
    emergencyContactPhone2: { type: DataTypes.STRING, allowNull: true },
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    idProfile: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: "profiles", key: "idProfile" },
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true, // Asegura que Sequelize maneje automáticamente las columnas createdAt y updatedAt
  }
);

export default User;
