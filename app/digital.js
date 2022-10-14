const galleryImg = document.querySelectorAll(
  "div.digital__section__gallery img"
);

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
const galleryPopupArrowLeft = document.querySelector(
  ".digital__gallery__popup__arrow--left"
);
const galleryPopupArrowRight = document.querySelector(
  ".digital__gallery__popup__arrow--right"
);

let currentImgIndex;

galleryImg.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    galleryPopup.classList.toggle("hide");
    galleryPopupImg.src = e.target.src;
    currentImgIndex = index;
  });
});

galleryPopupClose.addEventListener("click", () => {
  galleryPopup.classList.toggle("hide");
});

galleryPopupArrowLeft.addEventListener("click", () => {
  if (currentImgIndex === 0) {
    currentImgIndex = galleryImg.length - 1;
    galleryPopupImg.src = galleryImg[currentImgIndex].src;
  } else {
    currentImgIndex--;
    galleryPopupImg.src = galleryImg[currentImgIndex].src;
  }
});

galleryPopupArrowRight.addEventListener("click", () => {
  if (currentImgIndex === galleryImg.length - 1) {
    currentImgIndex = 0;
    galleryPopupImg.src = galleryImg[currentImgIndex].src;
  } else {
    currentImgIndex++;
    galleryPopupImg.src = galleryImg[currentImgIndex].src;
  }
});
