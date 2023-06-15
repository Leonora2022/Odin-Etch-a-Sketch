//accessing  elements from the DOM
const notice = document.querySelector('#alert');
const resizeButton = document.querySelector('#resize');
const drawingBoxes = document.querySelectorAll('.pixel');
const resetButton = document.querySelector('#reset');

//setting the size of the drawing board
function boardArchitecture(size) {
let drawingBoard = document.querySelector('#drawing-board');
drawingBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
drawingBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
for (let i = 1; i <= size ** 2; i++) {
let pixel = document.createElement('div');
pixel.classList.add('pixels');
pixel.addEventListener('mouseover', colourBoxes);
pixel.style.backgroundColor = 'white';
drawingBoard.appendChild(pixel);
}
}
//default drawing board size
let size = 16;
boardArchitecture(size);

//event handler to resize the drawing board by user choice
function resizeBoard(input) {
    input = prompt("Enter drawing board size not greater than 100 and not less than 2", '16');
    if (input > 100 || input == ''){
     notice.textContent = `⚠️ Error, enter size again!`; 
    }else {
    let drawingBoard = document.querySelector('#drawing-board');
    notice.textContent = '🖍️ You can draw!';
    drawingBoard.innerHTML = '';
     boardArchitecture(input);
    }
    document.body.style.backgroundColor = randomColor();
}
//event listener attached to resize button
resizeButton.addEventListener('click', resizeBoard, {once:false});

//event handler to reset drawing board
function reset(e) {
  var drawingBoard = document.querySelector('#drawing-board');
   var pixels = document.querySelectorAll('.pixels')
   pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
   document.body.style.backgroundColor = randomColor();
}

//event listener attached to reset button 
resetButton.addEventListener('click', reset);


let color = 'black';

//event handler attached to each pixel(box) on the drawing board to change color  
function colourBoxes(e) {
    e.currentTarget.style.cursor = 'crosshair';
    
    if (color === "random") {
        e.currentTarget.style.backgroundColor = randomColor();
    }else{
        e.currentTarget.style.backgroundColor = color;
    }
}
//inline event handler for buttons to set color of boxes
 function setColor(choice){
    color = choice;
 }
    //get random number to set random color
    function randomNumber(number) {
        return Math.floor(Math.random() * (number + 1));
    }
    
    //set random color
    function randomColor(){
        let randomCol = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        return randomCol;
    }

    //set background color for document body
    document.body.style.backgroundColor = 'plum';