const arrowDown = document.querySelector(
  ".digital__gallery__popup__arrow--down"
);

arrowDown.addEventListener("click", () => {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
});
