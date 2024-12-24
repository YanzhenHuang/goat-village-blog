
/**
 * Basic Info
 */

// Get canvas element
const cvs = document.getElementById('bg');

// Window size
let width = window.innerWidth,
    height = window.innerHeight;

// Canvas size
cvs.width = width;
cvs.height = height;

// Context
const ctx = cvs.getContext('2d');

// Font size
const fontSize = 5 * devicePixelRatio;

/**
 * More info
 * 
 */

// Column Width
let columnWidth = fontSize;

// Column Number
let columnNum = Math.floor(width / columnWidth);

// Each column: Id of the next character
let nextChars = new Array(columnNum).fill(0);

// Random color
function getRandomColor(){
    colorStr = "#"
    for (let i=0; i<6; i++){
        digit = Math.floor(Math.random() * 16);
        digitHex = digit.toString(16);
        colorStr += digitHex;
    }
    return colorStr;
}

// Random character
function getRandomChar(){
    asciiIdx = Math.floor(Math.random() * 94) + 33;
    return String.fromCharCode(asciiIdx)
}

// Set layout
function layout(){
    console.log("Layout")
    width = window.innerWidth;
    height = window.innerHeight;
    cvs.width = width;
    cvs.height = height;
    columnNum = Math.floor(width / columnWidth);
    nextChars = new Array(columnNum).fill(0); // Reset nextChars array
}

// Draw
function draw(){
    ctx.fillStyle = `rgba(0,0,0,0.1)`;
    ctx.fillRect(0, 0, width, height);
    
    for(let i=0; i < columnNum; i++){
        // which char
        const this_char = getRandomChar();

        // char color
        ctx.fillStyle = getRandomColor();

        // char size & font
        const this_size = fontSize;
        ctx.font = `${this_size}px monospace`;

        // char location
        const this_x = i * columnWidth;
        const this_y = (nextChars[i] + 1) * fontSize;

        ctx.fillText(this_char, this_x, this_y);

        if (this_y > height && Math.random() > 0.99){
            nextChars[i] = 0;
        }else{
            nextChars[i]++;
        }
    }
}


window.addEventListener('resize', () => {
    debounce(layout, 200)();
})

draw();

setInterval(draw, 30);