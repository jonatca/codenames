import Cards from "./cards.js";
export default class Game {
  constructor() {
    this.cards = new Cards();
    this.turn = this.cards.getStartingTeam();
    this.paintTurn(); //paints the startingturn backround of numbergrid
    this.numberGuesses = 0;
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

  cardClicked(rectangle, i) {
    if (!this.cards.isShowing(i) && this.numberGuesses > 0) {
      //not missclick
      rectangle[i].style.backgroundColor = this.cards.getColor(i); //change color of the card
      this.cards.setShowing(i); //set card to showing = True (not needed?)
      this.cards.reduceCardsLeft(i);
      this.changeGuessesAndTurn(i);
      this.paintTurn(); //paints the turn backround of numbergrid
      this.checkGameOver();
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

  checkGameOver() {
    if (this.cards.getRedCardsLeft() == 0) {
      console.log("red wins");
    } else if (this.cards.getBlueCardsLeft() == 0) {
      console.log("blue wins");
    }
  }
  _resetBoxesGrey() {
    for (let j = 1; j <= 6; j++) {
      //reset number boxes to grey
      var numberBox = document.getElementsByClassName("number")[j - 1];
      numberBox.style.backgroundColor = "#f2f2f2";
    }
  }
}
