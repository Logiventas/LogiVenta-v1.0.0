// preload.js
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  startServer: () => ipcRenderer.send('start-server'),
  updateConfig: (key: string, value: any) => ipcRenderer.invoke('update-config', key, value),
  getConfig: (key: string) => ipcRenderer.invoke('get-config', key)
});
