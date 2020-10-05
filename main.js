// RANDOM DANCE ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];

for(let i = 0; i < 15; i++) {
    let n = 300
    myArray.push(n)
}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

//Random Dance Function
document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {

    if (event.code == 'Space') {
        for (let i = 0; i < myArray.length; i++) {
            myArray[i] += Math.randomInt(-5, 5)

        }

    } else if (event.code == 'KeyR') {
        for (let i = 0; i < myArray.length; i++) {
            myArray[i] = 300
        }
    }
}