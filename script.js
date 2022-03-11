
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
        square.classList.add('grid');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = generateRandomColor();
        })
        square.style.background = "#f4f1de";
        square.style.border = "0.3px solid"
        pad.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function resetFunc() {
    square.style.background = "#f4f1de";
    console.log('square.style.background');
}

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}





