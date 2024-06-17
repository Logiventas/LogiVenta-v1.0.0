const { exec } = require('child_process');

// Función para obtener solo las direcciones IP de la salida del comando arp -a
function getLocalIPs() {
    return new Promise((resolve, reject) => {
        exec('arp -a', (error, stdout, stderr) => {
            if (error) {
                reject(new Error('Network timeout'));
                return;
            }
            if (stderr) {
                reject(new Error('Something went wrong'));
                return;
            }

            // Procesar la salida para extraer las direcciones IP
            const lineas = stdout.split('\n');
            const direccionesIP = lineas
                .map(linea => {
                    // Extraer la dirección de internet si la línea contiene una dirección física
                    const partes = linea.trim().split(/\s+/);
                    if (partes.length > 1 && partes[1].match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/)) {
                        return partes[0];
                    }
                })
                .filter(ip => ip); // Filtrar elementos no definidos

            resolve(direccionesIP);
        });
    });
}

export default getLocalIPs



