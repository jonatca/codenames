const grid = document.getElementById("card-grid");
for (let i = 0; i < 25; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    grid.appendChild(card);
}

const numberGrid = document.getElementById("number-grid");
for (let i = 1; i <= 6; i++) {
    var numberBox = document.createElement("div");
    numberBox.classList.add("number");
    numberBox.innerText = i
    numberGrid.appendChild(numberBox);
}