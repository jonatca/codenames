Project to learn javascript better.
Working fun game for 6-12 people.
Developed it for my 2 in 1 touch 15" laptop so i put it on the table like an ipad.

1. Start local host by running "python -m http.server 8000" in terminal.
2. go to http://localhost:8000/cards.html
3. in words, add you own txt file with 25 words or use one of the existing
4. change to your prefered txt-wordfile in js/paintBoxes.js

rules (https://www.ultraboardgames.com/codenames/game-rules.php)
1. Divide into two teams, each team with one gameleader
2. The two gameleaders press "Show Correct Answers" and take a picture of the screen while the other player look away
3. The startingteam is the team whos color is showing in backround
4. The starting teams teamleader says 1 word and presses on 1 number (1-6)
    - The word can not be on the board but should be a least common numerator
    - The number is how many words is associated with this word
5. The team has now that amount of possible guesses, but the turn flips if they guess wrong word
6. The winning team is the team that reaches 0 cards left or if the opposing team presses the black word

I have not implemented any return button of any kind, so if you press wrong, so be it (like it is in the original game)
Hope you enjoy!


