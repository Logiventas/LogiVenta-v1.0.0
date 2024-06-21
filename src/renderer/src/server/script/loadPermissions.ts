import Permission from "../models/Permission.model"; // Verifica la ruta

const permissions = [
  {
    "id": "CS00-00",
    "name": "Configuración sistema",
    "description": "Permite ingresar a Configuración de sistema"
  },
  {
    "id": "CS01-00",
    "name": "Configuración dispositivos",
    "description": "Permite Configurar dispositivos conectados"
  },
  {
    "id": "CS01-01",
    "name": "Configurar Impresora",
    "description": "Permite configurar las impresoras"
  },
  {
    "id": "CS01-02",
    "name": "Configurar Cajón",
    "description": "Permite configurar el cajón de dinero"
  },
  {
    "id": "CS01-03",
    "name": "Configurar Báscula",
    "description": "Permite configurar la báscula"
  },
  {
    "id": "CS01-04",
    "name": "Configurar Lector",
    "description": "Permite configurar el lector"
  },
  {
    "id": "CS02-00",
    "name": "Gestión de licencia",
    "description": "Permite configurar los servicios contratados"
  },
  {
    "id": "CS03-00",
    "name": "Formas de pago",
    "description": "Permite configurar las formas de pago o carteras"
  },
  {
    "id": "CS04-00",
    "name": "Base de datos",
    "description": "Permite configurar base de datos"
  },
  {
    "id": "CS04-01",
    "name": "BackUp",
    "description": "Permite realizar copias de seguridad de la base de datos"
  },
  {
    "id": "CS04-02",
    "name": "Importar",
    "description": "Permite importar datos a la base de datos"
  },
  {
    "id": "CS04-03",
    "name": "Exportar",
    "description": "Permite exportar datos de la base de datos"
  },
  {
    "id": "CS04-04",
    "name": "General",
    "description": "Permite realizar configuraciones generales de la base de datos"
  },
  {
    "id": "CS05-00",
    "name": "Datos de Empresa",
    "description": "Permite configurar los datos de la empresa registrados"
  },{
    "id": "GA00-00",
    "name": "Gestión de Archivos",
    "description": "Permite el acceso a gestión de archivos"
  },
  {
    "id": "GA01-00",
    "name": "Archivos de usuario",
    "description": "Permite gestionar archivos de usuario"
  },
  {
    "id": "GA02-00",
    "name": "Archivos de empresa",
    "description": "Permite gestionar archivos generales de la empresa"
  },
  {
    "id": "GC00-00",
    "name": "Gestión de caja",
    "description": "Permite el acceso a gestión de Caja"
  },
  {
    "id": "GC01-00",
    "name": "Cortes y recaudos",
    "description": "Permite gestión de Cortes y recaudos"
  },
  {
    "id": "GC02-00",
    "name": "Nomina",
    "description": "Permite gestionar los pagos de nomina"
  },
  {
    "id": "GC03-00",
    "name": "Compras",
    "description": "Permite la gestión de las compras"
  },
  {
    "id": "GC04-00",
    "name": "Cartera",
    "description": "Permite Gestionar las diferentes carteras"
  },
  {
    "id": "GC05-00",
    "name": "Gastos",
    "description": "Permite Gestionar los gastos de la empresa"
  },
  {
    "id": "GC06-00",
    "name": "Cuentas por cobrar",
    "description": "Permite Gestionar las cuentas por cobrar"
  },
  {
    "id": "GC07-00",
    "name": "Cuentas por pagar",
    "description": "Permite Gestionar las cuentas por pagar"
  },
  {
    "id": "GU00-00",
    "name": "Gestión de Usuarios",
    "description": "Permite el acceso a gestión de Usuario"
  },
  {
    "id": "GU01-00",
    "name": "Gestión de Usuario",
    "description": "Permite el acceso a la gestión de los usuarios"
  },
  {
    "id": "GU01-01",
    "name": "Nuevo Usuario",
    "description": "Permite crear un nuevo usuario"
  },
  {
    "id": "GU01-02",
    "name": "Editar Usuario",
    "description": "Permite editar la información de un usuario"
  },
  {
    "id": "GU01-03",
    "name": "Eliminar Usuario",
    "description": "Permite eliminar un usuario"
  },
  {
    "id": "GU01-04",
    "name": "Retirar Usuario",
    "description": "Permite retirar a un usuario"
  },
  {
    "id": "GU02-00",
    "name": "Gestión de perfiles",
    "description": "Permite gestionar los diferentes perfiles de usuario"
  },
  {
    "id": "GU02-01",
    "name": "Nuevo Perfil",
    "description": "Permite crear un nuevo perfil de usuario"
  },
  {
    "id": "GU02-02",
    "name": "Editar Perfil",
    "description": "Permite editar los detalles de un perfil de usuario"
  },
  {
    "id": "GU02-03",
    "name": "Eliminar Perfil",
    "description": "Permite eliminar un perfil de usuario"
  },
  {
    "id": "GU03-00",
    "name": "Gestión de Cargos",
    "description": "Permite gestionar los diferentes cargos para usuarios"
  },
  {
    "id": "GU03-01",
    "name": "Nuevo Cargo",
    "description": "Permite crear un nuevo cargo para usuarios"
  },
  {
    "id": "GU03-02",
    "name": "Editar Cargo",
    "description": "Permite editar los detalles de un cargo"
  },
  {
    "id": "GU03-03",
    "name": "Eliminar Cargo",
    "description": "Permite eliminar un cargo de usuario"
  },
  {
    "id": "RV00-00",
    "name": "Registro de Ventas",
    "description": "Permite el acceso a registro de ventas"
  },
  {
    "id": "GI00-00",
    "name": "Gestión de inventario",
    "description": "Permite el acceso a gestión de Inventario"
  },
  {
    "id": "GI01-00",
    "name": "Kardex inventario",
    "description": "Permite el acceso a Kardex del inventario de productos"
  },
  {
    "id": "GI02-00",
    "name": "Agregar inventario",
    "description": "Permite agregar inventario"
  },
  {
    "id": "GI03-00",
    "name": "Gestión de productos",
    "description": "Permite la gestión de productos"
  },
  {
    "id": "GI04-00",
    "name": "Pedidos",
    "description": "Permite la gestión de pedidos"
  },
  {
    "id": "GI05-00",
    "name": "Bodega",
    "description": "Permite el acceso y gestión de la bodega"
  },
  {
    "id": "GI06-00",
    "name": "Bienes",
    "description": "Permite la gestión de bienes"
  },
  {
    "id": "GI07-00",
    "name": "Categorías",
    "description": "Permite la gestión de categorías"
  },
  {
    "id": "I000-00",
    "name": "Informes",
    "description": "Permite el acceso a el modulo de informes "
  },
  {
    "id": "GP00-00",
    "name": "Gestión de proveedores",
    "description": "Permite el acceso a la gestión de proveedores  "
  }
];

const loadPermissions = async (): Promise<boolean> => {
  try {
    for (const permission of permissions) {
      const existingPermission = await Permission.findOne({ where: { id: permission.id } });
      if (!existingPermission) {
        await Permission.create(permission);
      }
    }
    console.log("Permisos cargados exitosamente");
    return true;
  } catch (error) {
    console.error("Error al cargar los permisos:", error);
    return false;
  }
};

export default loadPermissions;
