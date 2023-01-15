fetch("words/Svenska.txt")
    .then((response) => response.text())
    .then((data) => {
        let words = data.split("\n").slice(0, 25); // split the file data by new line and slice first 25 words
        var cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
            word = document.createElement("p");
            word.className = "word";
            word.innerText = words[i];
            cards[i].append(word);
        }
    });