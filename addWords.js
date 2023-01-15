
let words;
// save the words in words.txt in a variable called `words`
fetch("words.txt")
    .then((response) => response.text())
    .then((data) => {
        words = data.split("\n").slice(0, 25); // split the file data by new line and slice first 25 words




// using `fetch` to read the text file
// data = "hello\nworld\nthis\nis\na\ntest\nof\nthe\nemergency\nbroadcast\nsystem\nthis\nis\nonly\na\ntest\nhello\nworld\nthis\nis\na\ntest\nof\nthe\nemergency\nbroadcast\nsystem\nthis\nis\nonly\na\ntest"
// words = data.split("\n").slice(0, 25); // split the file data by new line and slice first 25 words
console.log(words);
var cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = words[i];

    }
    });