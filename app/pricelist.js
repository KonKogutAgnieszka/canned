const stylePrices = {
  sketch: {
    head: 10,
    half: 15,
    full: 20,
  },
  clean: {
    head: 15,
    half: 20,
    full: 30,
  },
  polished: {
    head: 25,
    half: 30,
    full: 45,
  },
};

const typePrices = {
  // price multiplier
  linesOnly: 1,
  flatColor: 1.5,
  cellShaded: 2,
};

const currentChoice = {
  style: "sketch",
  character: "head",
  type: "linesOnly",
};

const styleTab = [...document.querySelectorAll(".price__style.image")];
const characterTab = [...document.querySelectorAll(".price__character.image")];
const typeTab = [...document.querySelectorAll(".price__type.image")];
const priceValue = document.querySelector(".price__value");
const extraCharacter = document.querySelector(".extra__character");

function displayPrice() {
  let style = currentChoice.style;
  let character = currentChoice.character;
  let type = currentChoice.type;
  let currentPrice = stylePrices[style][character] * typePrices[type];
  if (extraCharacter.checked === true) {
    currentPrice = currentPrice + currentPrice * 0.85;
  }

  priceValue.innerHTML = `${Math.round(currentPrice)}$`;
}

function removeBorders(tab) {
  //remove border on all elements
  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("select");
  }
}

styleTab.forEach((style) => {
  style.addEventListener("click", (e) => {
    //price change//
    currentChoice.style = e.target.dataset.option;
    displayPrice();
    //border change //
    removeBorders(styleTab);
    e.target.classList.add("select");
  });
});

characterTab.forEach((character) =>
  character.addEventListener("click", (e) => {
    //price change//
    currentChoice.character = e.target.dataset.option;
    displayPrice();
    //border change //
    removeBorders(characterTab);
    e.target.classList.toggle("select");
  })
);

typeTab.forEach((type) =>
  type.addEventListener("click", (e) => {
    //price change//
    currentChoice.type = e.target.dataset.option;
    displayPrice();
    //border change //
    removeBorders(typeTab);
    e.target.classList.toggle("select");
  })
);

extraCharacter.addEventListener("change", displayPrice);

displayPrice();
