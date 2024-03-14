const { ipcRenderer } = require("electron/renderer");

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    ipcRenderer.invoke("new-window");
    console.log('salam salam')
  });
});
