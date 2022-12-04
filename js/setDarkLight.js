import setImages from "./logo_and_background_loader.js";

const setDarkLight = (e) => {
  console.log("in dark mode");
  e.preventDefault();
  const darkLightSwitcher = document.getElementById("dark-light");
  const main = document.getElementById("main");
  main.classList.toggle("light");
  if (main.classList.contains("light")) {
    darkLightSwitcher.setAttribute("class", "uil uil-moon");
    document.body.setAttribute("class", "lightBody");
  } else {
    darkLightSwitcher.setAttribute("class", "uil uil-sun");
    document.body.setAttribute("class", "darkBody");
  }
  setImages();
};
export default setDarkLight;
// darkLight.addEventListener("click", );
