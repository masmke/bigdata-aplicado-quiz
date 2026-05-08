const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getProgress:   ()        => ipcRenderer.invoke('store:get'),
  saveProgress:  (progress) => ipcRenderer.invoke('store:set', progress),
  resetProgress: ()        => ipcRenderer.invoke('store:reset'),
})
