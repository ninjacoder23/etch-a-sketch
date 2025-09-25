const container = document.querySelector(".container");
const resetBtn = document.getElementById("resetBtn");

// Function to create grid
function createGrid(size) {
  container.innerHTML = ""; // clear old grid
  const cellSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    // hover effect
    cell.addEventListener("mouseover", () => {
      cell.classList.add("hovered");
    });

    container.appendChild(cell);
  }
}

// Initial grid
createGrid(16);

// Button event
resetBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);

  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size! Please enter a number between 1 and 100.");
  }
});
