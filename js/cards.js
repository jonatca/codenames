export default class Cards {
  constructor() {
    this.numCards = 25;
    this.startingTeam = this.startingTeam();
    this.setNumberOfCards();
    this.colorList = this.createColorList();
    this.cardDict = this.createDict();
    console.log(this.cardDict);
  }
  startingTeam() {
    var randomIndex = Math.floor(Math.random() * 2);
    return ["red", "blue"][randomIndex];
  }

  setNumberOfCards() {
    this.numCardsRed = 7;
    this.numCardsBlue = 7;
    if (this.startingTeam == "red") {
      this.numCardsRed += 1;
    } else {
      this.numCardsBlue += 1;
    }
  }

  createColorList() {
    var colorList = [];
    for (let i = 0; i < this.numCardsRed; i++) {
      colorList.push("red");
    }
    for (let i = 0; i < this.numCardsBlue; i++) {
      colorList.push("blue");
    }
    for (
      let i = 0;
      i < this.numCards - this.numCardsRed - this.numCardsBlue;
      i++
    ) {
      colorList.push("white");
    }

    //shuffle colorList
    for (let i = colorList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colorList[i], colorList[j]] = [colorList[j], colorList[i]];
    }
    return colorList;
  }

  createDict() {
    var cardDict = {};
    for (let i = 0; i < this.numCards; i++) {
      cardDict[i] = {};
      cardDict[i]["color"] = this.colorList[i];
      cardDict[i]["showing"] = false;
    }
    return cardDict;
  }
  isShowing(i) {
    return this.cardDict[i]["showing"];
  }
  setShowing(i) {
    this.cardDict[i]["showing"] = true;
  }
  getColor(i) {
    return this.cardDict[i]["color"];
  }
  reduceCardsLeft(i) {
    var team = this.getColor(i);
    if (team == "red") {
      this.numCardsRed -= 1;
    } else {
      this.numCardsBlue -= 1;
    }
  }
  numCardsLeft(i) {
    var team = this.getColor(i);
    if (team == "red") {
      return this.numCardsRed;
    } else {
      return this.numCardsBlue;
    }
  }
}
// module.exports = Cards;
