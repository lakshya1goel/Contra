
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = 1290;

const backgroundImage = new Image();
backgroundImage.src = "./assets/level1.jpeg";

let imageX = 0; 
let imageY = 0; 
let imageWidth = canvas.width; 
let imageHeight = canvas.height+150; 

let backgroundX = 0;
let platformX = 0; 
var speed=10;
backgroundImage.onload = () => {

    startGame();
};

function startGame() {
    
    animationPlayer();
}

const gravity = 0.7;
class Player {
    constructor() {
        this.position = {
            x : 150,
            y : 150
        }

        this.width = 120;
        this.height = 120;
        this.speed = 10;

        this.velocity = {
            x : 0,
            y : 0
        }

        this.img = new Image();
        this.img.src = "./assets/PR/player1.png";
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
        
    }
}

class Platform {
    constructor(a,b,w,h) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();
const platforms = [
    new Platform(canvas.width * 0.08,canvas.height*0.5,2420, canvas.height * 0.1),

    new Platform(canvas.width * 0.42,canvas.height*0.65,350, canvas.height * 0.1),

    new Platform(canvas.width * 0.68,canvas.height*0.8,120, canvas.height * 0.1),
    new Platform(canvas.width * 0.78,canvas.height*0.95,200, canvas.height * 0.1),

    new Platform(canvas.width * 0.94,canvas.height*0.8,120, canvas.height * 0.1),

    new Platform(canvas.width * 1.1,canvas.height*0.65,230, canvas.height * 0.1),

    new Platform(canvas.width * 1.55,canvas.height*0.95,200, canvas.height * 0.1),

    new Platform(canvas.width * 1.64,canvas.height*0.7,300, canvas.height * 0.1),

    new Platform(canvas.width * 2.3,canvas.height*0.5,560, canvas.height * 0.1),
    new Platform(canvas.width * 3.07,canvas.height*0.5,910, canvas.height * 0.1),

    new Platform(canvas.width * 3.6,canvas.height*0.35,1750, canvas.height * 0.1),

    new Platform(canvas.width * 3.68,canvas.height*0.95,340, canvas.height * 0.1),

    new Platform(canvas.width * 3.94,canvas.height*0.75,230, canvas.height * 0.1),

    new Platform(canvas.width * 4.2,canvas.height*0.65,750, canvas.height * 0.1),

    new Platform(canvas.width * 4.52,canvas.height*0.95,670, canvas.height * 0.1),

    new Platform(canvas.width * 4.87,canvas.height*0.5,780, canvas.height * 0.1),

    new Platform(canvas.width * 5.05,canvas.height*0.8,220, canvas.height * 0.1),
    new Platform(canvas.width * 5.3,canvas.height*0.8,220, canvas.height * 0.1),

    new Platform(canvas.width * 5.4,canvas.height*0.35,550, canvas.height * 0.1),

    new Platform(canvas.width * 5.55,canvas.height*0.75,140, canvas.height * 0.1),

    new Platform(canvas.width * 5.74,canvas.height*0.66,320, canvas.height * 0.1),

    new Platform(canvas.width * 5.908,canvas.height*0.5,210, canvas.height * 0.1),

    new Platform(canvas.width * 6.15,canvas.height*0.66,230, canvas.height * 0.1),

    new Platform(canvas.width * 6.25,canvas.height*0.76,285, canvas.height * 0.1),

    new Platform(canvas.width * 6.5,canvas.height*0.52,200, canvas.height * 0.1),

    new Platform(canvas.width * 6.58,canvas.height*0.35,210, canvas.height * 0.1),

    new Platform(canvas.width * 6.85,canvas.height*0.52,200, canvas.height * 0.1),

    new Platform(canvas.width * 6.9,canvas.height*0.6,570, canvas.height * 0.1),

    new Platform(canvas.width * 7.18,canvas.height*0.95,325, canvas.height * 0.1),

    new Platform(canvas.width * 7.52,canvas.height*0.8,230, canvas.height * 0.1),

    new Platform(canvas.width * 7.75,canvas.height*0.66,230, canvas.height * 0.1),

    new Platform(canvas.width * 7.88,canvas.height*0.95,880, canvas.height * 0.1),

    new Platform(canvas.width * 7.98,canvas.height*0.75,420, canvas.height * 0.1),

    new Platform(canvas.width * 7.88,canvas.height*0.52,560, canvas.height * 0.1),

    new Platform(canvas.width * 8.3,canvas.height*0.6,130, canvas.height * 0.1),

    new Platform(canvas.width * 7.88,canvas.height*0.52,560, canvas.height * 0.1),


];

function animationPlayer() {

    requestAnimationFrame(animationPlayer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        backgroundImage, // Image object
        imageX, // X position within the image
        imageY, // Y position within the image
        imageWidth, // Width of the portion
        imageHeight, // Height of the portion
        0, // X position on the canvas
        0, // Y position on the canvas
        canvas.width, // Width to display on the canvas
        canvas.height // Height to display on the canvas
    );
    
    player.update();
    platforms.forEach(platform =>{
        platform.draw();
    })
    
    platforms.forEach(platform =>{
        if(collisionPlatform(player.position.x,player.position.y,player.width,player.height,platform.position.x,platform.position.y,platform.width,platform.height,player.velocity.y))
    {
        player.velocity.y=0;
    }
    })

    
}
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowRight':
            console.log('right');
            if(player.position.x <= 500)
                {
                    
                    player.velocity.x += speed;
                }
            else
            {
                player.velocity.x = 0;
                platforms.forEach(platform =>{
                    
                    platform.position.x -= speed;
                });
                imageX += speed;
            }
            
            break;
        case 'ArrowLeft' :
            console.log('left');
            if(player.position.x > 50)
            {
                player.velocity.x -= speed;
            }
            else
            {
            player.velocity.x = 0;
            platforms.forEach(platform =>{
                
            });}
            break;
        // case 'ArrowDown':
        //     console.log('down');
        //     player.velocity.y += 10;
        //     break;
        case 'ArrowUp':
            console.log('top');
            player.velocity.y -= 10;
            break;
    }
});



document.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'ArrowRight':
            console.log('right');
            player.velocity.x = 0;
            break;
        case 'ArrowLeft' :
            console.log('left');
            player.velocity.x = 0;
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowUp':
            console.log('top');
            player.velocity.y -= speed;
            break;
    }
})

//collision detection
function collisionPlatform(px, py, ph, pw, plx, ply, plh, plw, pxv) {
    if (py + ph >= ply && pxv >= 0 && px + pw >= plx && px <= plx + plw) {
        return true;
    } else {
        return false;
    }
}
