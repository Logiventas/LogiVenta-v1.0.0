import { useState } from "react"

const ConfigSecundaria = () => {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  // Expresión regular para validar una dirección IP IPv4
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleIpChange = (event) => {
    setIp(event.target.value);
    if (ipRegex.test(event.target.value)) {
      setError(""); // Limpiar errores si la nueva IP es válida
    } else {
      setError("La dirección IP no es válida.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ipRegex.test(ip)) {
      setError("La dirección IP no es válida.");
      return; // Detener la función si la IP no es válida
    }
    console.log("IP enviada:", ip);
    // Aquí puedes incluir la lógica para enviar la IP a un servidor o realizar otra acción
    setError(""); // Limpiar errores después de enviar
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form className="col-8 bg-dos p-5 rounded shadow-sm" style={{ maxWidth: '750px' }} onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3 d-flex justify-content-center">
          <div className="w-50">
            <label htmlFor="IP" className="form-label">IP Servidor</label>
            <input
              className="form-control"
              type="text"
              id="IP"
              value={ip}
              onChange={handleIpChange}
              placeholder="Ejemplo: 192.168.1.1"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50">Iniciar</button>
        </div>
      </form>
    </div>
  );
}

export default ConfigSecundaria;
