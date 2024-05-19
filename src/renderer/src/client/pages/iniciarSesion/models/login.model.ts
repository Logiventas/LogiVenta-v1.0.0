/**
 * Modelo de datos para la información de inicio de sesión.
 */
export default interface Login {
    /**
     * Nombre de usuario del individuo que intenta iniciar sesión.
     * Este campo es obligatorio.
     */
    userName: string;

    /**
     * Contraseña correspondiente al nombre de usuario.
     * Este campo es obligatorio y debe cumplir con las políticas de seguridad de contraseñas.
     */
    password: string;
}
