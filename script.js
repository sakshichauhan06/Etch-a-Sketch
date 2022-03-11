let color = 0;

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
            if(color == 0) {
                square.style.backgroundColor = generateRandomColor();
            } else if(color == 1) {
                square.style.backgroundColor = "#000000"
            } else if(color == 2) {
                var pick = document.getElementById("colorpicker").value;
                square.style.backgroundColor = pick;
            } else if(color == 3) {
                square.style.background = "#f4f1de";
            }
        })
        square.style.background = "#f4f1de";
        square.style.border = "0.3px solid"
        pad.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function resetFun() {
    var resetBtn = document.querySelectorAll('.grid');
    resetBtn.forEach(el => el.style.backgroundColor = "#f4f1de");
}

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function rgbFun() {
    color = 0;
}

function blackFun() {
    color = 1;
}

function colorPickerFun() {
    color = 2;
}

function eraserFun() {
    color = 3;
}



