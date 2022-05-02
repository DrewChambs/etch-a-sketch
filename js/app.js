// Link to container
const mainContainer = document.querySelector(".wrapper");

// Create div elements
let div;
let total = 98 * 98;
for (let i = 0; i < total; i++) {
  div = document.createElement("div");
  div.setAttribute("class", "etch-box");
  // div.setAttribute("class", "change_grid");
  mainContainer.appendChild(div);
}
// Link to grid
const etchBox = document.querySelectorAll(".etch-box");

// Add Event listener to grid
etchBox.forEach(item => {
  item.addEventListener("mouseover", () => {
    console.log("workin!");
    item.style.backgroundColor = "black";
  });
});

console.log("sillll");
