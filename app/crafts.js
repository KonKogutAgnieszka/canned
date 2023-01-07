const keychainsSrc = [
  [
    "images/crafts/woodburning/keychain_1a.png",
    "images/crafts/woodburning/keychain_1b.png",
  ],
  [
    "images/crafts/woodburning/keychain_2a.png",
    "images/crafts/woodburning/keychain_2b.png",
  ],
  [
    "images/crafts/woodburning/keychain_3a.png",
    "images/crafts/woodburning/keychain_3b.png",
  ],
  [
    "images/crafts/woodburning/keychain_4a.png",
    "images/crafts/woodburning/keychain_4b.png",
  ],
];

let currentKeyChain = 0;

const woodburningImgContainer = document.querySelector(
  ".woodburning__gallery__img__container"
);
woodburningImgFirst = document.querySelector(
  ".woodburning__gallery__img__first"
);
woodburningImgSecond = document.querySelector(
  ".woodburning__gallery__img__second"
);
const woodburningArrowLeft = document.querySelector(
  ".woodburning__gallery__arrow--left"
);
const woodburningArrowRight = document.querySelector(
  ".woodburning__gallery__arrow--right"
);

function keyChain() {
  woodburningImgFirst.src = keychainsSrc[currentKeyChain][0];
  woodburningImgSecond.src = keychainsSrc[currentKeyChain][1];
}

woodburningArrowLeft.addEventListener("click", () => {
  if (currentKeyChain === 0) {
    currentKeyChain = keychainsSrc.length - 1;
  } else {
    currentKeyChain--;
  }
  keyChain();
});

woodburningArrowRight.addEventListener("click", () => {
  if (currentKeyChain === keychainsSrc.length - 1) {
    currentKeyChain = 0;
  } else {
    currentKeyChain++;
  }
  keyChain();
});

woodburningImgContainer.addEventListener("click", () => {
  woodburningImgFirst.classList.toggle("top");
  woodburningImgFirst.classList.toggle("bottom");
  woodburningImgSecond.classList.toggle("top");
  woodburningImgSecond.classList.toggle("bottom");
});
