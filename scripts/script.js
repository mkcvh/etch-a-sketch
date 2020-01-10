let mainContainer = document.querySelector(".container")

let dimension;
function defineDimension() {
    dimension = Number(prompt("Please enter a number n for a n x n grid: "));
}

let createGrid = function() {
    let rows = "";
    for (i = 0; i < dimension; i++) {
        rows += "1fr ";}
    
    for (i=0; i < (dimension * dimension); i++) {
        let oneSquare = document.createElement('div');
        oneSquare.className = "boxes";
        oneSquare.id = "box" + i;
        mainContainer.appendChild(oneSquare);
    }
    mainContainer.style.gridTemplateRows = rows;
    mainContainer.style.gridTemplateColumns = rows;
}