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

galleryImg.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.src);
  });
});
