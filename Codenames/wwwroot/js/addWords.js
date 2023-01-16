fetch(`${window.location.origin}/lib/words/svenska.txt`)
    .then((response) => response.text())
    .then((data) => {
        let words = data.split("\n").slice(0, 25); // split the file data by new line and slice first 25 words
        var cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
            word = document.createElement("p");
            word.className = "word";
            word.innerText = words[i];
            cards[i].append(word);
            cards[i].addEventListener("click", function () {
                // Call your function here
                cardClicked(cards, i);
            });
        }
  
    });

function cardClicked(cards, i) {
    //recive color from a function, written i c# code in another file
    var color = getColor(); 
    var color = "red"
    cards[i].style.backgroundColor = color;
}