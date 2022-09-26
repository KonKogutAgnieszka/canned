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

imgChange = (imgDiv, tab) => {
  let i = 1;
  setInterval(() => {
    if (i < tab.length) {
      imgDiv.style.backgroundImage = `url(${tab[i]})`;
      i++;
    } else {
      imgDiv.style.backgroundImage = `url(${tab[0]})`;
      i = 1;
    }
  }, 4000);
};

imgChange(imgDigital, digital);
imgChange(imgCrafts, crafts);
