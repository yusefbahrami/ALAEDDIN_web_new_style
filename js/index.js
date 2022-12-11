import setImages from "./logoLoader_RouteSetter.js";
import setDarkLight from "./setDarkLight.js";

const darkLight = document.getElementById("dark-light");
darkLight.addEventListener("click", setDarkLight);

window.addEventListener("load", () => {
  setImages();
});
