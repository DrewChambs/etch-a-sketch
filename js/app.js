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
    return alert("Number can not be mire than 100");
  } else {
    printNewGrid(selection);
  }

  // userSelectBtn.disabled = true;
  // userSelectBtn.classList.add("disableButton");
});

resetBtn.addEventListener("click", () => {
  console.log("reset");
  // userSelectBtn.enabled = true;
  // userSelectBtn.classList.remove("disableButton");
});

// Default Grid
function startingGrid() {
  console.log("starting grid");
  for (let i = 0; i < 256; i++) {
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

// User-defined Grid
function printNewGrid(selection) {
  wrapperContainer.innerHTML = "";
  let total = selection * selection;
  // wrapperContainer.style.display = `grid`;
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
