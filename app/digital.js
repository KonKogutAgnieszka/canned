const galleryImg = document.querySelectorAll(
  "div.digital__section__gallery img"
);

//style set for gallery buttons //

galleryImg.forEach((item) => {
  if (item.naturalWidth > item.naturalHeight) {
    item.style.height = "100%";
  } else {
    item.style.width = "100%";
  }
});

//gallery popup//

const galleryPopup = document.querySelector(".digital__gallery__popup");
const galleryPopupImg = document.querySelector(
  ".digital__gallery__popup__image"
);
const galleryPopupClose = document.querySelector(
  ".digital__gallery__popup__close__img"
);

galleryImg.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(galleryPopupImg);
    galleryPopup.classList.toggle("hide");
    galleryPopupImg.src = e.target.src;
  });
});

galleryPopupClose.addEventListener("click", () => {
  galleryPopup.classList.toggle("hide");
});
