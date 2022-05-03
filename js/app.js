// Link to wrapper for game
const wrapperContainer = document.querySelector(".wrapper");
const userSelectBtn = document.querySelector(".userSelectBtn");
const resetBtn = document.querySelector(".resetBtn");

// Launch Default
startingGrid();

// User selection
userSelectBtn.addEventListener("click", () => {
  let selection = prompt("enter num");

  if (selection > 100) {
    return alert("Enter a number no more than 100");
  } else {
    printNewGrid(selection);
  }
});

resetBtn.addEventListener("click", () => {
  wrapperContainer.innerHTML = "";
  location.reload();
});

// Default Grid
function startingGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "etch-box");
    wrapperContainer.appendChild(div);
  }
  // Link to newly created grid
  const etchBox = document.querySelectorAll(".etch-box");
  // Add EventListener
  etchBox.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
}

// User-defined Grid
function printNewGrid(selection) {
  // Clear container
  wrapperContainer.innerHTML = "";

  // Load user grid
  let total = selection * selection;
  wrapperContainer.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;
  wrapperContainer.style.gridTemplateRows = `repeat(${selection}, 1fr)`;
  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "etch-box");
    wrapperContainer.appendChild(div);
  }

  // Link to newly created
  const etchBox = document.querySelectorAll(".etch-box");
  // Add EventListener
  etchBox.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
}
