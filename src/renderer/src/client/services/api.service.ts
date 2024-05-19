//src\renderer\src\client\services\api.service.ts
import axios from 'axios';
import config from '@renderer/config.json';

if (!config.IP_SERVER || !config.PORT_SERVER) {
    throw new Error('La configuración del servidor no está definida correctamente en config.json');
}

const api = axios.create({
    baseURL: `http://${config.IP_SERVER}:${config.PORT_SERVER}/api`,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000,
});

export default api;

