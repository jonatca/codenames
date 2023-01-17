var wordsFileName = "words/ord1.txt";
import Game from "./game.js";
var game = new Game();

createCards();
createNumberBox();
createAnswerButton();
function createCards() {
  const grid = document.getElementById("card-grid");
  for (let i = 0; i < 25; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    grid.appendChild(card);
  }

  fetch(wordsFileName)
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
          game.cardClicked(i);
        });
      }
    });
}
function createNumberBox() {
  const numberGrid = document.getElementById("number-grid");
  for (let i = 1; i <= 6; i++) {
    var numberBox = document.createElement("div");
    numberBox.classList.add("number");
    numberBox.innerText = i;
    numberGrid.appendChild(numberBox);
    numberBox.addEventListener("click", function () {
      game.numberBoxClicked(i);
    });
  }
}
function createAnswerButton() {
  const answerGrid = document.getElementById("answer-grid");
  var answerButton = document.createElement("div");
  answerButton.classList.add("answer");
  answerButton.innerText = "Show Correct Answer";
  answerGrid.appendChild(answerButton);
  answerButton.addEventListener("click", function () {
    game.answerButtonClicked();
  });
}
