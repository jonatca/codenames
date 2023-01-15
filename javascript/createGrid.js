const grid = document.getElementById("card-grid");
for (let i = 0; i < 25; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    grid.appendChild(card);
  }