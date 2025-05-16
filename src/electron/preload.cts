import { contextBridge, ipcRenderer } from 'electron';

// Expose a minimal API to the renderer process for the starter kit
contextBridge.exposeInMainWorld('electronAPI', {
  // Example: you can add your own APIs here
  ping: () => ipcRenderer.invoke('ping'),
  getConfig: (key: string) => ipcRenderer.invoke('config:get', key),
  setConfig: (key: string, value: string) => ipcRenderer.invoke('config:set', key, value),
  getAllConfigs: () => ipcRenderer.invoke('config:getAll'),
});
