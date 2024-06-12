const { contextBridge, ipcRenderer } = require('electron/renderer')
/*
contextBridge.exposeInMainWorld('electronAPI', {
  setId: (id) => ipcRenderer.send('set-id', id),
  //set: ipcRenderer.on('set', (event, data) =>  data),
  //i: () => ipcRenderer.on('set-id',(data)=>{return data}),
  //r:()=> ipcRenderer.on('set-id',(data)=>{data})
})
*/



/*window.re = () => {
  //ipcRenderer.send('submit-button-clicked')
  console.log("rom preload")
};*/


// Expose the ipcRenderer to the window object
//window.ipcRenderer = ipcRenderer;
/*window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })*/