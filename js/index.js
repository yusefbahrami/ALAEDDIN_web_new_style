import setImages from "./logo_and_background_loader.js";
import setDarkLight from "./setDarkLight.js";

const darkLight = document.getElementById("dark-light");
darkLight.addEventListener("click", setDarkLight);

window.addEventListener("load", () => {
  setImages();
});
