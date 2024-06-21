import User from "../../../models/User.model";
import Residence from "../../../models/Residence.model";
import ContactEmergency from "../../../models/ContactEmergency.model";
import Account from "../../../models/Account.model";

export const createUser = async (
  userInput: any,
  residence: any,
  account: any,
  contact: any
): Promise<any> => {

  try {
    if (!User.sequelize) {
      throw new Error("La instancia de Sequelize no está definida en el modelo User.");
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { identification: userInput.identification } });

    if (existingUser) {
      return {
        success: false,
        message: 'El usuario con esta identificación ya existe',
        data: null,
      };
    }

    // Verificar si la cuenta ya existe
    const existingAccount = await Account.findOne({ where: { name: account.name } });

    if (existingAccount) {
      return {
        success: false,
        message: 'La cuenta con este nombre ya existe',
        data: null,
      };
    }

    const transaction = await User.sequelize.transaction();

    try {
      const createdAccount = await Account.create(
        { ...account },
        { transaction }
      );

      userInput.accountId = createdAccount.id;

      const newUser = await User.create(userInput, { transaction });

      await Residence.create(
        { ...residence, userId: newUser.id },
        { transaction }
      );

      await ContactEmergency.create(
        { ...contact, idUser: newUser.id },
        { transaction }
      );

      await transaction.commit();

      return {
        success: true,
        message: 'Usuario creado con éxito',
        data: newUser,
      };
    } catch (error: any) {
      await transaction.rollback();
      if (error.name === 'SequelizeValidationError') {
        return {
          success: false,
          message: 'Error de validación: ' + error.errors.map((e: any) => e.message).join(', '),
          data: null,
        };
      }

      return {
        success: false,
        message: 'Error al crear el usuario',
        data: null,
      };
    }
  } catch (error: any) {
    console.error("Error al crear usuario:", error);
    return {
      success: false,
      message: 'Error al crear el usuario: ' + error.message,
      data: null,
    };
  }
};
