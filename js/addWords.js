import Game from "./game.js";
var game = new Game();
createCards();
createNumberCards();
function createCards() {
  const grid = document.getElementById("card-grid");
  for (let i = 0; i < 25; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    grid.appendChild(card);
  }

  fetch("words/Svenska.txt")
    .then((response) => response.text())
    .then((data) => {
      let words = data.split("\n").slice(0, 25); // split the file data by new line and slice first 25 words
      var rectangle = document.getElementsByClassName("card");
      for (let i = 0; i < rectangle.length; i++) {
        var word = document.createElement("p");
        word.className = "word";
        word.innerText = words[i];
        rectangle[i].append(word);
        rectangle[i].addEventListener("click", function () {
          // Call a the function cardClicked in the file cardClicked.js

          game.cardClicked(rectangle, i);

          //cardClicked(cards, i);
        });
      }
    });
}
function createNumberCards() {
  const numberGrid = document.getElementById("number-grid");
  for (let i = 1; i <= 6; i++) {
    var numberBox = document.createElement("div");
    numberBox.classList.add("number");
    numberBox.innerText = i;
    numberGrid.appendChild(numberBox);
  }
}
