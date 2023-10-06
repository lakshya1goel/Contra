var canvas=document.querySelector("canvas");
canvas.height=window.innerHeight;
canvas.width=11374;
const ctx = canvas.getContext("2d");

var bridge=document.querySelector(".bridge")
bridge.height=80;
bridge.width=450;

var backGroundImage=new Image();
backGroundImage.src="./assets/level1.jpeg";
var xPosition=0;

var xb1=100;
var yb1=canvas.height-380;
var xb2=2950;
var yb2=canvas.height-380;
var xb3=3950;
var yb3=canvas.height-380;
var xb4=6250;
var yb4=canvas.height-380;
var xb5=7550;
var yb5=canvas.height-380;
var xb6=8310;
var yb6=canvas.height-380;
var xb7=8760;
var yb7=canvas.height-380;
var xb8=10200;
var yb8=canvas.height-380;
var xb9=4610;
var yb9=canvas.height-480;


var bridge1=new Image();
bridge1.src="./assets/bridge.png";
var xBridge1Position=2515;

var bridge2=new Image();
bridge2.src="./assets/bridge.png";
var xBridge2Position=3500;


window.onload = function () {
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
    drawRedBox(xb1, yb1, 2420, 380);
    drawRedBox(xb2, yb2, 550, 380);
    drawRedBox(xb3, yb3, 870, 380);
    drawRedBox(xb4, yb4, 750, 380);
    drawRedBox(xb5, yb5, 220, 380);
    drawRedBox(xb6, yb6, 220, 380);
    drawRedBox(xb7, yb7, 220, 380);
    drawRedBox(xb8, yb8, 500, 380);
    drawRedBox(xb9, yb9, 1750, 480);
};


var speed =100;

function backGroundAnimation(){

    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
    drawRedBox(xb1, yb1, 2420, 380);
    drawRedBox(xb2, yb2, 550, 380);
    drawRedBox(xb3, yb3, 870, 380);
    drawRedBox(xb4, yb4, 780, 380);
    drawRedBox(xb5, yb5, 230, 380);
    drawRedBox(xb6, yb6, 220, 380);
    drawRedBox(xb7, yb7, 220, 380);
    drawRedBox(xb8, yb8, 500, 380);
    drawRedBox(xb9, yb9, 1750, 480);
    
    xPosition -= speed;
    xb1 -= speed;
    xb2 -= speed;
    xb3 -= speed;
    xb4 -= speed;
    xb5 -= speed;
    xb6 -= speed;
    xb7 -= speed;
    xb8 -= speed;
    xb9 -= speed;
    if (xPosition <= -backGroundImage.width) {
        xPosition = 0;
    }
    requestAnimationFrame();
    if (!isBridge1Destroyed)
    {
        ctx.drawImage(bridge1, xBridge1Position, 270, bridge.width, bridge.height);
    }
    
    if (!isBridge2Destroyed)
    {
    ctx.drawImage(bridge2, xBridge2Position, 270, bridge.width, bridge.height);
    }

    xPosition -= speed;
    xBridge1Position-=speed;
    xBridge2Position-=speed;
    if (xPosition <= -backGroundImage.width) {
        xPosition = 0;
        xBridge1Position=2515;
        xBridge2Position=3500;
    }

}

//to be removed testing only
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            backGroundAnimation();
            break;
            case 'ArrowDown':
            destroyBridge1();
            break;
            case 'ArrowUp':
            destroyBridge2();
            break;
    }
});


//blocks setup
function drawRedBox(x, y, width, height) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(x, y, width, height);
    ctx.stroke();
}
const blastImages = [
    "./assets/bridge_blast1.png",
    "./assets/bridge_blast2.png",
    "./assets/bridge_blast3.png",
    "./assets/bridge_blast4.png",
    "./assets/bridge_blast5.png",
    "./assets/bridge_blast6.png",
    "./assets/bridge_blast7.png"
];

let isBridge1Destroyed = false;
var blastImage1 = new Image();
var xblastBridge1Position = 2515;
var currentBlastFrame = 0;

// Function to update the bridge destruction animation
function updateBridge1Destruction() {
    setInterval(() => {
        if (currentBlastFrame < blastImages.length) {
            blastImage1.src = blastImages[currentBlastFrame];

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);

            ctx.drawImage(bridge2, xBridge2Position, 270, bridge.width, bridge.height);
            ctx.drawImage(blastImage1, xBridge1Position, 270, bridge.width, bridge.height);

            currentBlastFrame++;
        } else 
        {
            isBridge1Destroyed = true;
        }
    }, 300);
}

function destroyBridge1() {
    if (!isBridge1Destroyed) {
        isBridge1Destroyed = true;
        updateBridge1Destruction();
    }
}

let isBridge2Destroyed = false;
var blastImage2 = new Image();
var xblastBridge2Position = 3500;
var currentBlastFrame2 = 0;

function updateBridge2Destruction() {
    setInterval(() => {
        if (currentBlastFrame2 < blastImages.length) {
            blastImage2.src = blastImages[currentBlastFrame2];

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);

            ctx.drawImage(blastImage2, xBridge2Position, 270, bridge.width, bridge.height);

            currentBlastFrame2++;
        } else {
            isBridge2Destroyed = true;
        }
    }, 300);
}

function destroyBridge2() {
    if (!isBridge2Destroyed) {
        isBridge2Destroyed = true;
        updateBridge2Destruction();
    }
}
