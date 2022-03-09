
function sliderFun(val) {
    document.getElementById("value").innerHTML = val;
}

function createGrid(size) {
    let pad = document.querySelector('.pad');
    let squares = pad.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    pad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    pad.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.background = "#f4f1de";
        square.style.border = "0.3px solid"
        pad.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);


