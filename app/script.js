const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  overlay.classList.toggle("open");
  if (overlay.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  } else {
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  }
});
