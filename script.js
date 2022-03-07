
function sliderFun(val) {
    document.getElementById("value").innerHTML = val;
}

let pad = document.querySelector('.pad');
pad.style.gridTemplateColumn = "repeat(16, 1fr)";
pad.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.background = "blue";
    pad.insertAdjacentElement("beforeend", square);
}
