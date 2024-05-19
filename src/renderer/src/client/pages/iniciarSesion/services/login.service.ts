// src/renderer/src/client/pages/iniciarSesion/services/login.service.ts
import api from '../interceptors/login.interceptor';
import Login from '../models/login.model';

const URL = '/session/login';

const login = async (credentials: Login) => {
  try {
    const response = await api.post(URL, credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.headers);
    return response.status;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export default login;
