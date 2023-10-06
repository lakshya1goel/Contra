var canvas=document.querySelector("canvas")
canvas.height=window.innerHeight;
canvas.width=11374;
const ctx = canvas.getContext("2d");

var bridge=document.querySelector(".bridge")
bridge.height=80;
bridge.width=450;

var backGroundImage=new Image();
backGroundImage.src="./assets/level1.jpeg";
var xPosition=0;

var bridge1=new Image();
bridge1.src="./assets/bridge.png";
var xBridge1Position=2515;

var bridge2=new Image();
bridge2.src="./assets/bridge.png";
var xBridge2Position=3500;

window.onload = function () {
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
};

var speed =100;
function backGroundAnimation(){

    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
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
