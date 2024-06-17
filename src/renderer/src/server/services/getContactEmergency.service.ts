import ContactEmergency from '../models/ContactEmergency.model';

export const getContactEmergency = async (idUser: number): Promise<any> => {
    try {
        const contact = await ContactEmergency.findOne({ where: { idUser } });
        if (contact) {
            return { 
                code: 200,
                status: true,
                message: 'Solicitud procesada con éxito',
                data: contact.dataValues,
            };
        } else {
            return { 
                code: 200,
                status: false,
                message: 'No se encontró el contacto de emergencia',
                data: null,
            };
        }
    } catch (error) {
        return { 
            code: 500,
            status: false,
            message: new Error(`Error al obtener el contacto de emergencia para el usuario con ID ${idUser}`),
            data: null,
        };
    }
};
