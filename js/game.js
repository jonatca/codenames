import Cards from "./cards.js";
export default class Game {
  constructor() {
    this.cards = new Cards();
    this.turn = this.cards.getStartingTeam();
    this.paintTurn();
    this.numberGuesses = 0;
  }
  cardClicked(rectangle, i) {
    if (!this.cards.isShowing(i) && this.numberGuesses > 0) {
      //else missclick
      rectangle[i].style.backgroundColor = this.cards.getColor(i);
      this.cards.setShowing(i);
      this.cards.reduceCardsLeft(i);
      this.changeGuessesAndTurn(i);
      this.paintTurn();
      this.checkGameOver();
    }
  }
  paintTurn() {
    const numberGrid = document.getElementById("number-grid");
    numberGrid.style.backgroundColor = this.turn;
  }

  changeGuessesAndTurn(i) {
    this.numberGuesses -= 1;
    //if with or statement

    if (this.numberGuesses == 0 || this.cards.getColor(i) != this.turn) {
      //if guess is wrong or out of guesses
      if (this.turn == "red") {
        this.turn = "blue";
      } else {
        this.turn = "red";
      }
      this.resetBoxesGrey();
      this.numberGuesses = 0;
      //   let numberGrid = document.getElementById("number-grid");
      //   numberGrid.style.backgroundColor = this.turn;
    }
  }
  resetBoxesGrey() {
    for (let j = 1; j <= 6; j++) {
      //reset number boxes to grey
      var numberBox = document.getElementsByClassName("number")[j - 1];
      numberBox.style.backgroundColor = "#f2f2f2";
    }
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
  checkGameOver() {
    if (this.cards.getRedCardsLeft() == 0) {
      console.log("red wins");
    } else if (this.cards.getBlueCardsLeft() == 0) {
      console.log("blue wins");
    }
  }
}
