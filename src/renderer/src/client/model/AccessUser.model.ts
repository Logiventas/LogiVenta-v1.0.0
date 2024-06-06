interface AccessUser {
  access: {
    gestionArchivo: boolean;
    gestionSistema: boolean;
    gestionCaja: boolean;
    gestionUsuario: boolean;
    gestionInventario: boolean;
    gestionProveedores: boolean;
    registroVentas: boolean;
  }
}

export default AccessUser;
