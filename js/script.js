const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 581
canvas.width = 1290;
console.log( window.innerHeight);
const backgroundImage = new Image();
backgroundImage.src = "./assets/level1.jpeg";

let imageX = 0;
let imageY = 0;
let imageWidth = canvas.width;
let imageHeight = canvas.height + 150;

let backgroundX = 0;
let platformX = 0;
var speed = 10;
backgroundImage.onload = () => {
  startGame();
};

function startGame() {
  animationPlayer();
}

const gravity = 1.2;
class Player {
  constructor() {
    this.position = {
      x: 150,
      y: 150,
    };

    this.width = 120;
    this.height = 120;
    this.speed = 10;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.img = new Image();
    this.img.src = "./assets/PR/player1.png";
  }

  draw() {
    // ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y < canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

class Platform {
    constructor(a, b, w, h) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
        // this.alpha = 0;
    }

    draw() {
        // ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        // ctx.globalAlpha = 1; 
    }
}


class Bridge {
    constructor(a, b, w, h) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./assets/bridge.png";
        this.isBlasted = false;
        this.blastFrame = 0;
        this.isDestroyed = false; // New property to track if the bridge is destroyed
    }

    draw() {
        if (this.isBlasted) {
            ctx.drawImage(blastImages[this.blastFrame], this.position.x, this.position.y, this.width, this.height);

        } else if (!this.isDestroyed) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    blast() {
        this.isBlasted = true;
    }

    destroy() {
        this.isDestroyed = true;
    }
}

const bridges = [
    new Bridge(canvas.width * 1.95, canvas.height * 0.5, 450, 70, 1),
    new Bridge(canvas.width * 2.71, canvas.height * 0.5, 450, 70, 1), 
];


const player = new Player();
const platforms = [
    new Platform(canvas.width * 0.08,canvas.height*0.5,2420, canvas.height * 0.1),

    new Platform(canvas.width * 0.42,canvas.height*0.65,350, canvas.height * 0.1),

    new Platform(canvas.width * 0.68,canvas.height*0.8,120, canvas.height * 0.1),
    new Platform(canvas.width * 0.78,canvas.height*0.95,200, canvas.height * 0.1),

    new Platform(canvas.width * 0.94,canvas.height*0.8,120, canvas.height * 0.1),

    new Platform(canvas.width * 1.1,canvas.height*0.65,230, canvas.height * 0.1),

    new Platform(canvas.width * 1.54,canvas.height*0.95,200, canvas.height * 0.1),

    new Platform(canvas.width * 1.63,canvas.height*0.7,300, canvas.height * 0.1),

    new Platform(canvas.width * 2.3,canvas.height*0.5,560, canvas.height * 0.1),
    new Platform(canvas.width * 3.07,canvas.height*0.5,910, canvas.height * 0.1),

    new Platform(canvas.width * 3.58,canvas.height*0.35,1750, canvas.height * 0.1),

    new Platform(canvas.width * 3.65,canvas.height*0.95,340, canvas.height * 0.1),

    new Platform(canvas.width * 3.898,canvas.height*0.75,230, canvas.height * 0.1),

    new Platform(canvas.width * 4.14,canvas.height*0.65,780, canvas.height * 0.1),

    new Platform(canvas.width * 4.5,canvas.height*0.95,720, canvas.height * 0.1,0),

    new Platform(canvas.width * 4.84,canvas.height*0.5,780, canvas.height * 0.1),

    new Platform(canvas.width * 5.,canvas.height*0.8,220, canvas.height * 0.1),
    new Platform(canvas.width * 5.27,canvas.height*0.8,220, canvas.height * 0.1),

    new Platform(canvas.width * 5.35,canvas.height*0.35,550, canvas.height * 0.1),

    new Platform(canvas.width * 5.52,canvas.height*0.75,110, canvas.height * 0.1),

    new Platform(canvas.width * 5.7,canvas.height*0.66,320, canvas.height * 0.1),

    new Platform(canvas.width * 5.86,canvas.height*0.5,210, canvas.height * 0.1),

    new Platform(canvas.width * 6.1,canvas.height*0.66,230, canvas.height * 0.1),

    new Platform(canvas.width * 6.2,canvas.height*0.76,300, canvas.height * 0.1),

    new Platform(canvas.width * 6.46,canvas.height*0.52,200, canvas.height * 0.1),

    new Platform(canvas.width * 6.54,canvas.height*0.35,210, canvas.height * 0.1),

    new Platform(canvas.width * 6.79,canvas.height*0.52,200, canvas.height * 0.1),

    new Platform(canvas.width * 6.85,canvas.height*0.6,570, canvas.height * 0.1),

    new Platform(canvas.width * 7.12,canvas.height*0.95,325, canvas.height * 0.1),

    new Platform(canvas.width * 7.46,canvas.height*0.8,230, canvas.height * 0.1),

    new Platform(canvas.width * 7.71,canvas.height*0.66,230, canvas.height * 0.1),

    new Platform(canvas.width * 7.84,canvas.height*0.95,880, canvas.height * 0.1),

    new Platform(canvas.width * 7.98,canvas.height*0.75,420, canvas.height * 0.1),

    new Platform(canvas.width * 7.88,canvas.height*0.52,560, canvas.height * 0.1),

    new Platform(canvas.width * 8.3,canvas.height*0.6,130, canvas.height * 0.1),

    new Platform(canvas.width * 7.88,canvas.height*0.52,560, canvas.height * 0.1),

];

const blastImages = [
    "./assets/bridge_blast1.png",
    "./assets/bridge_blast2.png",
    "./assets/bridge_blast3.png",
    "./assets/bridge_blast4.png",
    "./assets/bridge_blast5.png",
    "./assets/bridge_blast6.png",
    "./assets/bridge_blast7.png"
];

function animationPlayer() {

    requestAnimationFrame(animationPlayer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        backgroundImage,
        imageX, 
        imageY, 
        imageWidth, 
        imageHeight, 
        0, 
        0,
        canvas.width, 
        canvas.height 
    );
    
    player.update();

    platforms.forEach(platform =>{
        if(collisionPlatform(player.position.x,player.position.y,player.width,player.height,platform.position.x,platform.position.y,platform.width,platform.height,player.velocity.y, player.velocity.x))
    {
        player.velocity.y=0;
    }
    })

    bridges.forEach(bridge => {
        bridge.draw();
    });

    platforms.forEach(platform =>{
        platform.draw();
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
                bridges.forEach(bridge => {
                    bridge.position.x-=speed;
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
            }
            break;
        case 'ArrowUp':
            console.log('top');
            player.velocity.y -= 10;
            break;
    }
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      console.log("right");
      player.velocity.x = 0;
      break;
    case "ArrowLeft":
      console.log("left");
      player.velocity.x = 0;
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowUp":
      console.log("top");
      player.velocity.y -= speed;
      break;
  }
});

//collision detection
function collisionPlatform(playerX, playerY, playerW, playerH, platformX, platformY, platformW, platformH, playerVelY, playerVelX) {
  if (playerY + playerH <= platformY && 
    playerY + playerH + playerVelY >= platformY && 
    playerX + playerW >= platformX && 
    playerX <= platformX + platformW) 
  {
    return true;
  } else {
    return false;
  }
  
  bridges.forEach(bridge => {
        if (!bridge.isBlasted && playerY + playerH >= bridge.position.y && playerVelX >= 0 && playerX + playerW >= bridge.position.x && playerX <= bridge.position.x + bridge.width) {
            bridge.blast();
        }
    });
}
