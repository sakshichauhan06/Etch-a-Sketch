

function createGrid(x){
    for(var rows = 0; rows < x; rows++) {
        for(var col = 0; col < x; col++) {
            $("#pad").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(450/x);
    $(".grid").height(450/x);
}

var gridValue = document.getElementById("slider");

console.log(gridValue.value);