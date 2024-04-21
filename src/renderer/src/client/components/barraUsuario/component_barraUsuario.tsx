
import Notificaciones from './barraUsuario_notificaciones';
import Salir from './barraUsuario_salir';
import Atras from './barraUsuario_atras'

const BarraUsuario = ({nombre,apellidos,notificaciones}) => {
    return (
        <nav
            style={{ backgroundColor: "var(--color-primary-red)" }}
            className="navbar navbar-expand-lg navbar-light"
        >
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Atras/>
                    <img
                        style={{ width: "40px", height: "40px" }}
                        className="mr-2"
                        src="/src/assets/img/usuario.png"
                        alt="Avatar"
                    />
                    <h4 className="m-0 ms-3">{nombre+' '+apellidos}</h4>
                </div>
                <div className="d-flex align-items-center">
                    <Notificaciones numero={notificaciones} />
                    <Salir />
                </div>
            </div>
        </nav>
    );
};

export default BarraUsuario;
