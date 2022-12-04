const darkLight = document.getElementById("dark-light");

darkLight.addEventListener("click", (e) => {
  e.preventDefault();
  const main = document.getElementById("main");
  main.classList.toggle("light");
  if (main.classList.contains("light")) {
    darkLight.setAttribute("class", "uil uil-moon");
    document.body.setAttribute("class", "lightBody");
  } else {
    darkLight.setAttribute("class", "uil uil-sun");
    document.body.setAttribute("class", "darkBody");
  }
});
