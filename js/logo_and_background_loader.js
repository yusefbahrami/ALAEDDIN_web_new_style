const setImages = async () => {
  const imgProfile = document.querySelector(".profile-image");
  const imgProfileRoute = document.querySelector(".profile-image-route");
  const main = document.querySelector(".main");
  let gradiant;
  let result;
  if (main.classList.contains("light")) {
    result = await fetch("./assets/yusef.jpg");
    gradiant = "rgba(239, 255, 253, 100%)";
  } else {
    result = await fetch("./assets/IMG_20221024_160602_501.jpg");
    gradiant = "rgba(23, 23, 23, 100%)";
  }
  if (result.status == 200) {
    imgProfile.setAttribute("src", result.url);
    imgProfileRoute.setAttribute("href", result.url);
    main.style.background = `linear-gradient(rgba(68, 68, 68, 20%),${gradiant}),
      url(${result.url}) center center/cover fixed`;
  }
};
export default setImages;

