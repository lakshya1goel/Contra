var canvas=document.querySelector("canvas")
canvas.height=window.innerHeight;
canvas.width=11374;
const ctx = canvas.getContext("2d");

var backGroundImage=new Image();
backGroundImage.src="./assets/level1.jpeg";
var xPosition=0;
window.onload = function () {
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
};

var speed =8;
function backGroundAnimation(){
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
    xPosition -= speed;
    if (xPosition <= -backGroundImage.width) {
        xPosition = 0;
    }
    
    requestAnimationFrame(drawBackground);
}
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            backGroundAnimation();
            break;
    }
});
