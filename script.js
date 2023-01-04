const gridContainer = document.querySelector('.div-container');
const numButton = document.querySelector('.div-num');

numButton.addEventListener('click', generateSquares);

function generateSquares () {
    let numSquares = prompt('What size grid of squares?');
    while (numSquares > 100 && numSquares < 0) {
        numSquares = prompt('Choose a number less than 100');
    }
    gridContainer.innerHTML = ''
    sqrSize = 640/numSquares;
    
    console.log(sqrSize)
    for (let i = 0; i < numSquares; i++){
        gridContainer.innerHTML += `<div class='row-${i}'></div>`;
        let rowNum = document.querySelector(`.row-${i}`);
        for (let j = 0; j < numSquares; j++){
            rowNum.innerHTML += `<div class='col-${j} one-div'
            style='width:clamp(5px, 9vmin, ${sqrSize}px); height:clamp(5px, 9vmin, ${sqrSize}px);'></div>`;
        }
    }

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++){
            const currDiv = document.querySelector(`.row-${i} .col-${j}`);
            currDiv.addEventListener('mousemove', () => {
                let passPercent = 90;
                currDiv.style.filter += `brightness(${passPercent}%)`
            });
        }
    }
}


