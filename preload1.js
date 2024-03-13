// preload.js
// window.console = {
//   log: () => {},
//   error: () => {},
//   warn: () => {},
//   info: () => {},
//   debug: () => {}
// };
window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    console.log("salam")
    document.querySelector("#app > div.page > nav > ul.TopBar_menuItem__AUQXo.TopBar_right__coJaz > li > div").remove();
  }, 2500);
});
