import ConfigPrincipal from "./ConfigPrincipal";

export default function Principal() {
    return (

        <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }} className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-5">Por favor, elija cómo desea configurar la instalación</h1>
            <div className="d-flex justify-content-center gap-5">
                <div className="m-3 text-center">
                    <img src="/src/assets/img/CajaPrincipal.png" alt="Caja Principal" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                    <p className="mt-3 mb-0">Caja Principal</p>
                </div>

                <div className="m-3 text-center">
                    <img src="/src/assets/img/CajaSecundaria.png" alt="Caja Secundaria" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                    <p className="mt-3 mb-0">Caja secundaria</p>
                </div>
            </div>
           
        </div>
    );
}
