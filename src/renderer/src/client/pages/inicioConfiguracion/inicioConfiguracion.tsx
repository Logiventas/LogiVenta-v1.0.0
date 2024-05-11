// InitialConfig.tsx
import React from 'react';
import { useConfig } from './hooks/useConfig';
import ConfigOption from './components/ConfigOption'
import ConfigPrincipal from "./components/ConfigSecundaria";
import ConfigSecundaria from "./components/ConfigPrincipal";

const InitialConfig: React.FC = () => {
  const { config, handleSelection, resetSelection } = useConfig();

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      {config === null ? (
        <div className="container mt-5">
          <h1 className="mb-5 text-center">Por favor, elija cómo desea configurar la instalación</h1>
          <div className="row d-flex justify-content-center">
            <ConfigOption
              title="Configuración como cliente"
              description="Seleccione si este equipo se usará como un punto de venta adicional que se conecta a la caja principal previamente configurada."
              onSelect={() => handleSelection("cliente")}
            />
            <ConfigOption
              title="Configuración como servidor"
              description="Seleccione si este equipo será el corazón de su negocio, manejando toda la información y coordinando las demás cajas."
              onSelect={() => handleSelection("servidor")}
            />
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <h1 className="text-center">Configuración como {config}</h1>
          <div>{config === "cliente" ? <ConfigPrincipal /> : <ConfigSecundaria />}
          </div>
          <div className="text-center mt-3">
            <button onClick={resetSelection} className="btn btn-secondary">Regresar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InitialConfig;
