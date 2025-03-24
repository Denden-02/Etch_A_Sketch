 // Logic Commit 3/24/25
makeGrid();
hoverColor();
 // Logic Commit 3/24/25 - merge next 2 block of functions and produce a function
 
function hoverColor() {
    document.querySelectorAll(".hover-color").forEach(
        function(node){
            node.addEventListener("mouseover", (evt) => {
                evt.currentTarget.style.backgroundColor = "blue";
            });
        }
    );
};

function makeGrid() {
    for (let i=0;i<256;++i) {
        let divSet = document.createElement("div")

        divSet.style.cssText = `box-sizing: border-box; border: 1px solid black; flex-grow: 1; flex-shrink: 0; flex-basis: ${100/16}%`
        divSet.classList.add("hover-color");
        
        let mainCont = document.querySelector(".main-container");
        mainCont.appendChild(divSet);
    };
};

function clearGrid() {
    document.querySelector(".main-container").innerHTML = "";
};

function setGridSize() {
    clearGrid();

    main: while (true) {

    var gridSize = Math.floor(Number(prompt("Select grid square size (Max: 100): ")));

    if (Number.isInteger(gridSize)) {
        if (gridSize <= 100 && gridSize > 0 ) {
            break main;
        } else {
            alert("Enter a valid number between 1-100");
            continue main;
        };
    } else {
        alert("Enter a valid number between 1-100");
        continue;
        };  
    };

    // time to make a grid based on num pick
    for (let i=0; i < (gridSize**2) ; ++i) {
        let divSet = document.createElement("div")

        divSet.style.cssText = `box-sizing: border-box; border: 1px solid black; flex-grow: 1; flex-shrink: 0; flex-basis: ${100/gridSize}%`
        divSet.classList.add("hover-color");
        
        let mainCont = document.querySelector(".main-container");
        mainCont.appendChild(divSet);
    };

    hoverColor();
};
 





