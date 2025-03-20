//TODO: continue LOGIC OF STEP 2 pseudocode; 3/20/2025
// Logic #1 - commit 3/20/25
function makeGrid() {
    for (let i=0;i<256;++i) {
        let divSet = document.createElement("div")
        divSet.style.cssText = "box-sizing: border-box; border: 1px solid black; flex-grow: 1; flex-shrink: 0; flex-basis: 6.25%"
        let mainCont = document.querySelector(".main-container");
        mainCont.appendChild(divSet);
    };
}

makeGrid();

//CONTINUE TOMORROW 3/20/2025