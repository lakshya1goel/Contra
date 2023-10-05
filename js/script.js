var canvas=document.getElementById("background");
canvas.height=window.innerHeight;
canvas.width=11374;
const ctx = canvas.getContext("2d");

var backGroundImage=new Image();
backGroundImage.src="./assets/level1.jpeg";
var xPosition=0;
var xb1=100;
var xb2=2950;
var xb3=3950;
var xb4=7900;
var xb5=8750;
// var xb6=
var xb7=550;
var xb9=1430;
window.onload = function () {
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
    drawRedBox(xb1, 375, 2400, 300);
    drawRedBox(xb2, 375, 550, 300);
    drawRedBox(xb3, 375, 3800, 300);
    drawRedBox(xb4, 375, 750, 300);
    drawRedBox(xb5, 375, 750, 300);
    drawRedBox(xb5, 375, 750, 300);
    drawRedBox(xb7, 470, 320, 200);
    drawRedBox(xb9, 470, 220, 200);
};

var speed=25;
function backGroundAnimation(){
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
    drawRedBox(xb1, 375, 2400, 300);
    drawRedBox(xb2, 375, 550, 300);
    drawRedBox(xb3, 375, 3800, 300);
    drawRedBox(xb4, 375, 750, 300);
    drawRedBox(xb5, 375, 750, 300);
    drawRedBox(xb5, 375, 750, 300);
    drawRedBox(xb7, 470, 320, 200);
    drawRedBox(xb9, 470, 220, 200);
    xPosition -= speed;
    xb1 -= speed;
    xb2 -= speed;
    xb3 -= speed;
    xb4 -= speed;
    xb5 -= speed;
    // xb6 -= speed;
    xb7 -= speed;
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
