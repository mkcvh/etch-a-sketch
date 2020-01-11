let mainContainer = document.querySelector(".container")
let colorChange = "black";
let dimension = 16;
let opacityChange = 0;
// prompts user for the dimensions of grid
function defineDimension() {
    dimension = Number(prompt("Please enter a number n for a n x n grid: "));
    createGrid();
}

// clears the current grid
let clearGrid = function() {
    let boxes = document.querySelectorAll('.boxes');
    for (i = 0; i < boxes.length; i++) 
        {
            boxes[i].style.backgroundColor = "white";
            if (selectedColor == "shade") {
            boxes[i].style.opacity = "0"; }
            else {
                boxes[i].style.opacity = "1";
            }
        }

    }



// creates a grid with n rows and columns
let createGrid = function() {
    let rows = "";
    for (i = 0  ; i < dimension; i++) {
        rows += "1fr ";}
    
    mainContainer.innerHTML = '';
    for (i=0; i < (dimension * dimension); i++) {
        let oneSquare = document.createElement('div');
        oneSquare.className = "boxes";
        oneSquare.id = "box" + i;
        oneSquare.style.opacity = "1";
       oneSquare.addEventListener("mouseover", () => {setColor(); if (selectedColor == "shade") {event.target.style.opacity = Number(event.target.style.opacity) + opacityChange;} else {event.target.style.opacity = "1"}
                                   event.target.style.backgroundColor = colorChange});
        mainContainer.appendChild(oneSquare);
    }
    mainContainer.style.gridTemplateRows = rows;
    mainContainer.style.gridTemplateColumns = rows;
}
createGrid();

let selectedColor = document.querySelector(".colorSelector").value;

function setColor() {
    if (selectedColor == "random") 
        {colorChange = '#'+Math.floor(Math.random()*16777215).toString(16);}
    else if (selectedColor == "shade")
        {colorChange = "black";
        opacityChange = 0.1}
    else
    {colorChange = selectedColor;}
}

document.querySelector(".colorSelector").addEventListener("change", () => {
                                                                           selectedColor = document.querySelector(".colorSelector").value; if (selectedColor == "shade") {clearGrid();}
                                                                          })


document.getElementById("setDimension").addEventListener("click", defineDimension)

document.getElementById("clearGrid").addEventListener("click", clearGrid);




