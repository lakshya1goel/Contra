var canvas=document.getElementById("background");
canvas.height=window.innerHeight;
canvas.width=11374;
const ctx = canvas.getContext("2d");

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

var speed=25;
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
}
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            backGroundAnimation();
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
