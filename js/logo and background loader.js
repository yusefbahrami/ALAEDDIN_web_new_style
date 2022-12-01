const imgProfile = document.querySelectorAll(".profile-image");

window.addEventListener("load", async () => {
  const result = await fetch("./assets/IMG_20221024_160602_501.jpg");
  if (result.status == 200) {
    imgProfile[0].setAttribute("src", result.url);
    imgProfile[1].setAttribute("href", result.url);
    document.body.style.background = `linear-gradient(rgba(13, 71, 83, 78%), rgba(13, 71, 83, 78%)),
    url("./assets/IMG_20221024_160602_501.jpg") center center/cover fixed`;
  }
});
