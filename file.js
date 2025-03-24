 // Logic Commit 3/24/25
function clearGrid() {
    document.querySelector(".main-container").innerHTML = "";
}

 function makeGrid() {
    for (let i=0;i<256;++i) {
        let divSet = document.createElement("div")

        divSet.style.cssText = `box-sizing: border-box; border: 1px solid black; flex-grow: 1; flex-shrink: 0; flex-basis: ${100/16}%`
        divSet.classList.add("hover-color");
        
        let mainCont = document.querySelector(".main-container");
        mainCont.appendChild(divSet);
    };
}

makeGrid();
clearGrid()

document.querySelectorAll(".hover-color").forEach(
    function(node){
        node.addEventListener("mouseover", colorBox);
    }
);

function colorBox(evt) {
    evt.currentTarget.style.backgroundColor = "blue";
    // alert(`${evt}`);
}



