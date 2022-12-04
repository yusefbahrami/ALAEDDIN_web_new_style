const setImages = async () => {
  const imgProfile = document.querySelector(".profile-image");
  const imgProfileRoute = document.querySelector(".profile-image-route");
  const main = document.querySelector(".main");
  var result = await fetch("./assets/IMG_20221024_160602_501.jpg");
  if (result.status == 200) {
    imgProfile.setAttribute("src", result.url);
    imgProfileRoute.setAttribute("href", result.url);
    main.style.background = `linear-gradient(rgba(68, 68, 68, 20%),rgba(23, 23, 23, 100%)),
  url(${result.url}) center center/cover fixed`;
  }
};
window.addEventListener("load", () => {
  setImages();
});
