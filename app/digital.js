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
const galleryPopupImgSrc = document.getElementById("galleryPopupImg").src;

//galleries type//
const sketchGallery = document.querySelectorAll(
  ".digital__section__gallery.sketch img"
);

sketchGallery.forEach((item) => {
  item.addEventListener("click", (e) => {
    let imgSource = e.target.src;
    galleryPopup.classList.toggle("hide");
  });
});
