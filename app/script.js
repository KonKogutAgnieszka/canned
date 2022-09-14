const body = document.querySelector("body");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");
const menuMobile = document.querySelector(".header__mobilemenu");

//animated menu mobile //

hamburger.addEventListener("click", () => {
  body.classList.toggle("noscroll");
  hamburger.classList.toggle("open");
  overlay.classList.toggle("open");
  menuMobile.classList.toggle("has-fade");
  if (overlay.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  } else {
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  }
  if (menuMobile.classList.contains("has-fade")) {
    menuMobile.classList.add("fade-out");
    menuMobile.classList.remove("fade-in");
  } else {
    menuMobile.classList.add("fade-in");
    menuMobile.classList.remove("fade-out");
  }
});

//animated features//

const imgDigital = document.querySelector(".digital");
const imgCrafts = document.querySelector(".crafts");

const digital = [
  "../images/features/digital1.jpg",
  "../images/features/digital2.jpg",
  "../images/features/digital3.jpg",
];
const crafts = [
  "../images/features/crafts1.jpg",
  "../images/features/crafts2.jpg",
];
