const darkLight = document.getElementById("dark-light");

darkLight.addEventListener("click", () => {
  const main = document.getElementById("main");
  main.classList.toggle("light");
  if (main.classList.contains("light")) {
    darkLight.setAttribute("class", "uil uil-moon");
  } else {
    darkLight.setAttribute("class", "uil uil-sun");
  }
});
