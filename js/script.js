const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 581;
canvas.width = 1290;

const backgroundImage = new Image();
backgroundImage.src = "./assets/level1.jpeg";

let imageX = 0;
let imageY = 0;
let imageWidth = canvas.width;
let imageHeight = canvas.height+150;

let backgroundX = 0;
let platformX = 0;
var speed = 20;
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
      x: 150,
      y: 150,
    };

    this.width = 100;
    this.height = 100;
    this.speed = 10;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.currentIndex=0;
    this.playerImg = [
        "./assets/PR/player.png",
        "./assets/PR/player1.png",
        "./assets/PR/player2.png",
        "./assets/PR/player3.png",
        "./assets/PR/player4.png",
        "./assets/PR/player5.png",
        "./assets/PR/jump1.png",
        "./assets/PR/jump2.png",
        "./assets/PR/jump3.png",
        "./assets/PR/jump4.png",
        "./assets/PR/death1.png",
        "./assets/PR/death2.png",
        "./assets/PR/death3.png",
        "./assets/PR/shooting1.png",
        "./assets/PR/shooting2.png",
        "./assets/PR/shooting3.png",
        "./assets/PR/up.png",
        "./assets/PR/down.png",
    ];

    this.img = new Image();
    this.img.src = this.playerImg[this.currentIndex];
    if(this.position.y + this.height + this.velocity.y  >= canvas.height){
        console.log("at bottom");
        this.img.scr=this.player[17];
    }
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % 6;
    this.img.src = this.playerImg[this.currentIndex];
  }

  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
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
      y: b,
    };
    this.width = w;
    this.height = h;
  }

  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class Enemy {
    constructor(x, y, width, height) {
        this.position = {
            x: x,
            y: y
        };
        this.width = width;
        this.height = height;

        this.currentIndex = 0;
        this.enemyImg = [
            "./assets/EL/bag1.png",
            "./assets/EL/bag2.png",
            "./assets/EL/bag3.png",
            "./assets/EL/bag4.png",
        ];
        this.img = new Image();
        this.img.src = this.enemyImg[this.currentIndex];
    }

    draw() {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
    
}

const player = new Player();

const platforms = [
  new Platform(
    canvas.width * 0.08,
    canvas.height * 0.5,
    2420,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 0.42,
    canvas.height * 0.65,
    350,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 0.68,
    canvas.height * 0.8,
    120,
    canvas.height * 0.1
  ),
  new Platform(
    canvas.width * 0.78,
    canvas.height * 0.95,
    200,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 0.94,
    canvas.height * 0.8,
    120,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 1.1,
    canvas.height * 0.65,
    230,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 1.55,
    canvas.height * 0.95,
    200,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 1.64,
    canvas.height * 0.7,
    300,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 2.3,
    canvas.height * 0.5,
    560,
    canvas.height * 0.1
  ),
  new Platform(
    canvas.width * 3.07,
    canvas.height * 0.5,
    910,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 3.6,
    canvas.height * 0.35,
    1750,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 3.68,
    canvas.height * 0.95,
    340,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 3.94,
    canvas.height * 0.75,
    230,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 4.2,
    canvas.height * 0.65,
    750,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 4.52,
    canvas.height * 0.95,
    670,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 4.87,
    canvas.height * 0.5,
    780,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 5.05,
    canvas.height * 0.8,
    220,
    canvas.height * 0.1
  ),
  new Platform(
    canvas.width * 5.3,
    canvas.height * 0.8,
    220,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 5.4,
    canvas.height * 0.35,
    550,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 5.55,
    canvas.height * 0.75,
    140,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 5.74,
    canvas.height * 0.66,
    320,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 5.908,
    canvas.height * 0.5,
    210,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.15,
    canvas.height * 0.66,
    230,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.25,
    canvas.height * 0.76,
    285,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.5,
    canvas.height * 0.52,
    200,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.58,
    canvas.height * 0.35,
    210,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.85,
    canvas.height * 0.52,
    200,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 6.9,
    canvas.height * 0.6,
    570,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.18,
    canvas.height * 0.95,
    325,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.52,
    canvas.height * 0.8,
    230,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.75,
    canvas.height * 0.66,
    230,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.95,
    880,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.98,
    canvas.height * 0.75,
    420,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.52,
    560,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 8.3,
    canvas.height * 0.6,
    130,
    canvas.height * 0.1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.52,
    560,
    canvas.height * 0.1
  ),
];

const enemy = [
    new Enemy(
       canvas.width * 0.8,
       canvas.height * 0.33,
       100,
       100
    ),

    new Enemy(
        canvas.width * 1.6,
        canvas.height * 0.33,
        100,
        100
    )
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
  platforms.forEach((platform) => {
    platform.draw();
  });

  platforms.forEach((platform) => {
    if (
      collisionPlatform(
        player.position.x,
        player.position.y,
        player.width,
        player.height,
        platform.position.x,
        platform.position.y,
        platform.width,
        platform.height,
        player.velocity.y
      )
    ) {
      player.velocity.y = 0;
    }
  });

  enemy.forEach((eny) => {
    eny.draw();
  });
}
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      console.log("right");
      if (player.position.x <= 500) {
        player.velocity.x += 2;
      } else {
        player.velocity.x = 0;
        platforms.forEach((platform) => {
          platform.position.x -= speed;
        });
        enemy.forEach((eny) => {
            eny.position.x -= speed;
        });
        imageX += speed;
      }
      player.changeImage();
      break;
    case "ArrowLeft":
      console.log("left");
      if (player.position.x > 50) {
        player.velocity.x -= 2;
      } else {
        player.velocity.x = 0;
        // platforms.forEach((platform) => {});
      }
      break;
    case "ArrowUp":
      console.log("top");
      player.velocity.y -= 10;
      player.currentIndex=6;
      player.changeImage();
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
      player.velocity.y -= 10;
      break;
  }
});

//collision detection
function collisionPlatform(playerX, playerY, playerW, playerH, platformX, platformY, platformW, platformH, playerVelY) {
  if (playerY + playerH <= platformY && 
    playerY + playerH + playerVelY >= platformY && 
    playerX + playerW >= platformX && 
    playerX <= platformX + platformW) 
  {
    return true;
  } else {
    return false;
  }
}

