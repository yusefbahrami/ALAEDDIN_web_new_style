const setImages = async () => {
  const imgProfile = document.querySelector(".profile-image");
  const imgProfileRoute = document.querySelector(".profile-image-route");
  const main = document.querySelector(".main");
  let result;
  if (main.classList.contains("light")) {
    result = await fetch("./assets/yusef.jpg");
  } else {
    result = await fetch("./assets/IMG_20221024_160602_501.jpg");
  }
  if (result.status == 200) {
    imgProfile.setAttribute("src", result.url);
    imgProfileRoute.setAttribute("href", result.url);
  }
};
export default setImages;
