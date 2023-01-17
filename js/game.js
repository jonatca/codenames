import Cards from "./cards.js";
export default class Game {
  constructor() {
    this.cards = new Cards();
    this.turn = this.cards.getStartingTeam();
    this.paintTurn(); //paints the startingturn backround of numbergrid
    this.numberGuesses = 0;
    this.showAllCards = false;
  }

  numberBoxClicked(i) {
    if (this.numberGuesses == 0) {
      //only change if out of guesses, else missclick
      //change color of numberBox number i to turn color
      var numberBox = document.getElementsByClassName("number")[i - 1];
      numberBox.style.backgroundColor = this.turn;
    }
    this.numberGuesses = i;
  }

  cardClicked(i) {
    if (!this.cards.isShowing(i) && this.numberGuesses > 0) {
      //not missclick
      this.paintCard(i); //paints the card
      this.cards.setShowing(i); //set card to showing = True (not needed?)
      this.cards.reduceCardsLeft(i);
      this.changeGuessesAndTurn(i);
      this.paintTurn(); //paints the turn backround of numbergrid
      this.checkGameOver(i);
    }
  }

  changeGuessesAndTurn(i) {
    this.numberGuesses -= 1;
    if (this.numberGuesses == 0 || this.cards.getColor(i) != this.turn) {
      //if guess is wrong or out of guesses
      if (this.turn == "red") {
        this.turn = "blue";
      } else {
        this.turn = "red";
      }
      this._resetBoxesGrey();
      this.numberGuesses = 0;
    }
  }

  paintTurn() {
    const numberGrid = document.getElementById("number-grid");
    numberGrid.style.backgroundColor = this.turn;
  }

  checkGameOver(i) {
    let winner = null;
    if (this.cards.getRedCardsLeft() == 0) {
      winner = "red";
    } else if (this.cards.getBlueCardsLeft() == 0) {
      winner = "blue";
    }
    if (this.cards.getColor(i) == "#5A5A5A") {
      //colorcode for black card
      //whoever guesses black loses
      if (this.turn == "red") {
        winner = "blue";
      } else {
        winner = "red";
      }
    }
    if (winner != null) {
      //wait 1 second before alert
      setTimeout(function () {
        alert("Game Over, " + winner + " wins!");
      }, 100);
    }
  }
  _resetBoxesGrey() {
    for (let j = 1; j <= 6; j++) {
      //reset number boxes to grey
      var numberBox = document.getElementsByClassName("number")[j - 1];
      numberBox.style.backgroundColor = "#f2f2f2";
    }
  }
  paintCard(i, color = null) {
    //color could be grey
    if (color == null) {
      color = this.cards.getColor(i);
    }
    var rectangle = document.getElementsByClassName("card");
    rectangle[i].style.backgroundColor = color; //change color of the card
  }
  answerButtonClicked() {
    var answerButton = document.getElementsByClassName("answer");
    if (this.showAllCards) {
      //hide all cards if they are shown
      var color = "#f2f2f2";
      this.showAllCards = false;
      answerButton[0].innerText = "Show Correct Answer";
    } else {
      //show all cards if they are hidden
      var color = null;
      this.showAllCards = true;
      answerButton[0].innerText = "Hide Correct Answer";
    }
    for (let i = 0; i < this.cards.getNumberOfCards(); i++) {
      this.paintCard(i, color);
    }
  }
}
