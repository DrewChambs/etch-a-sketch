// Link to body section
const bodyEtch = document.querySelector(".body");
// Link to sketch container
const wrapperContainer = document.querySelector(".wrapper");

// Default Setup
let defaultSetup = 16;
let defaultTotal = defaultSetup * defaultSetup;

// Get User selection
let selection = 16;
let userTotal = selection * selection;

// div element
let div;

//// Build Grid ////
for (let i = 0; i < userTotal; i++) {
  // Create divs for grid
  div = document.createElement("div");
  div.setAttribute("class", "etch-box");
  wrapperContainer.appendChild(div);
}
// paintGrid(selection);
// Link to grid
const etchBox = document.querySelectorAll(".etch-box");

// Event listener to paint grid
etchBox.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});

paintGrid(selection);

// Paint grid function
function paintGrid(selection) {
  wrapperContainer.style.display = `grid`;
  wrapperContainer.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;
  wrapperContainer.style.gridTemplateRows = `repeat(${selection}, 1fr)`;
}

// wrapperContainer.style.gridTemplateColumns = `repeat(${userTotal}, 1fr)`;
// wrapperContainer.style.gridTemplateRows = `repeat(${userTotal}, 1fr)`;
