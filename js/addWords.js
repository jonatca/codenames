

import Game from './game.js';
var game = new Game()

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
        






