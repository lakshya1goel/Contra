const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var backGroundImage=new Image();
backGroundImage.src="./assets/level1.jpeg";
var xPosition=0;

class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const platform1 = new Platform(canvas.width * 0.01, canvas.height * 0.5, 2420, canvas.height * 0.02);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    platform1.draw();

    //platform detection
    
    if(player.x,player.y,player.width,player.height,platform1.x,platform1.y,platform1.height,platform1.width,player.velocity.y){
        player.velocity.y=0;
    }
    ctx.drawImage(backGroundImage, xPosition, 0, canvas.width, canvas.height);
}

animate();

function platformDetection( px,py,pw,ph,plx,ply,plw,plh,pvy){
    if((py+ph<=ply)(py+ph+pvy>=ply)&&(px+pw>=plx)&&(px<=plx+plw)){
        return true;
    }
}
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            xPosition -= speed;
            animate();
            break;
            case 'ArrowDown':
            destroyBridge1();
            break;
            case 'ArrowUp':
            destroyBridge2();
            break;
            case 'ArrowLeft':
                xPosition += speed;
                animate();
            break;
    }
});


