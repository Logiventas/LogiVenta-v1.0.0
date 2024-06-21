// src/renderer/src/client/pages/userManagmen/profiles/tableProfiles/interceptor/allProfile.interceptor.ts
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const api = axios.create();

const safeDelay = (delay: number): number => {
  if (typeof delay !== 'number' || Number.isNaN(delay) || delay < 0) {
    throw new Error('Delay must be a valid non-negative number');
  }
  return delay;
};

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.withCredentials = true;
    console.log('Request Interceptor:', config);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
      console.log('Cookies recibidas:', setCookieHeader);
    }
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as InternalAxiosRequestConfig & { retryCount?: number };
    if (config && error.response && error.response.status >= 500) {
      if (!config.retryCount) {
        config.retryCount = 1;
      }
      if (config.retryCount < 3) {
        config.retryCount += 1;
        await new Promise<void>(resolve => setTimeout(() => resolve(), safeDelay(1000)));
        return api(config);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
