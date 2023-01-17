import Cards from './cards.js';
export default class Game {
    constructor() {
        this.cards = new Cards();
        this.redTurn = true;
    }
    cardClicked(rectangle, i) {
        if (!this.cards.isShowing(i)) {
            rectangle[i].style.backgroundColor = this.cards.getColor(i);
            this.cards.setShowing(i);
            this.cards.reduceCardsLeft(i);
            //this.checkGameOver()
        }
    }
    checkGameOver() {
        if (this.cards.numCardsLeft() == 0) {
            if (this.redTurn) {
                console.log("red win")
            }
            else {
                console.log("blue win")
                alert("Blue team wins!")
            }
        }

    }
}