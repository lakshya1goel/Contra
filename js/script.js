import Player from "./player.js";
import Platform from "./platform.js";
import Enemy from "./enemy.js";

document
  .querySelector(".landing-page .button1")
  .addEventListener("click", () => {
    document.getElementById("canvas").style.display = "block";
    console.log("Click");
    document.querySelector(".landing-page").style.display = "none";

    var b = document.querySelector("body");
    b.style.backgroundImage = "url(./assets/contraMainBackground.jpg)";
    b.style.backgroundColor = "black";
  });

// const enemies = [];

// function createEnemy() {
//   const x = canvas.width;
//   const y = Math.random() * (canvas.height - enemyHeight);
//   const enemy = new Enemy(x, y, 100, 100);
//   enemies.push(enemy);
// }
// createEnemy();

function showGameOver() {
  const gameOverDiv = document.querySelector(".gameOver");
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "black";

  gameOverDiv.style.display = "flex";
  document.querySelector(".gameOver .end").addEventListener("click", () => {
    window.close();
  });
}

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.height = 581;
canvas.width = 1290;
const backgroundImage = new Image();
backgroundImage.src = "./assets/level1.jpeg";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const leftPosition = (screenWidth - canvasWidth) / 2;
const topPosition = (screenHeight - canvasHeight) / 2;

canvas.style.position = "absolute";
canvas.style.left = leftPosition + "px";
canvas.style.top = topPosition + "px";

let imageX = 0;
let imageY = 0;
let imageWidth = canvas.width;
let imageHeight = canvas.height + 150;

let backgroundX = 0;
let platformX = 0;
var speed = 5;
backgroundImage.onload = () => {
  startGame();
};

function startGame() {
  animationPlayer();
}

const gravity = 0.7;

const platforms = [
  new Platform(
    canvas.width * 0.08,
    canvas.height * 0.5,
    2420,
    canvas.height * 0.1,
    0
  ),

  new Platform(
    canvas.width * 0.07,
    canvas.height * 0.98,
    5800,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 0.42,
    canvas.height * 0.65,
    350,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 0.68,
    canvas.height * 0.8,
    120,
    canvas.height * 0.1,
    1
  ),
  new Platform(
    canvas.width * 0.78,
    canvas.height * 0.95,
    200,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 0.94,
    canvas.height * 0.8,
    120,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 1.1,
    canvas.height * 0.65,
    230,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 1.54,
    canvas.height * 0.95,
    200,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 1.63,
    canvas.height * 0.7,
    300,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 2.3,
    canvas.height * 0.5,
    560,
    canvas.height * 0.1,
    1
  ),
  new Platform(
    canvas.width * 3.07,
    canvas.height * 0.5,
    910,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 3.58,
    canvas.height * 0.35,
    1750,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 3.65,
    canvas.height * 0.95,
    340,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 3.898,
    canvas.height * 0.75,
    230,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 4.14,
    canvas.height * 0.65,
    780,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 4.5,
    canvas.height * 0.95,
    720,
    canvas.height * 0.1,
    0,
    1
  ),

  new Platform(
    canvas.width * 4.84,
    canvas.height * 0.5,
    780,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 5,
    canvas.height * 0.8,
    220,
    canvas.height * 0.1,
    1
  ),
  new Platform(
    canvas.width * 5.27,
    canvas.height * 0.8,
    220,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 5.35,
    canvas.height * 0.35,
    550,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 5.52,
    canvas.height * 0.75,
    110,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 5.7,
    canvas.height * 0.66,
    320,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 5.86,
    canvas.height * 0.5,
    210,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.1,
    canvas.height * 0.66,
    230,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.2,
    canvas.height * 0.76,
    300,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.46,
    canvas.height * 0.52,
    200,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.54,
    canvas.height * 0.35,
    210,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.79,
    canvas.height * 0.52,
    200,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 6.85,
    canvas.height * 0.6,
    570,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.12,
    canvas.height * 0.95,
    325,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.46,
    canvas.height * 0.8,
    230,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.71,
    canvas.height * 0.66,
    230,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.84,
    canvas.height * 0.95,
    880,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.98,
    canvas.height * 0.75,
    420,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.52,
    560,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 8.3,
    canvas.height * 0.6,
    130,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.52,
    560,
    canvas.height * 0.1,
    1
  ),

  new Platform(
    canvas.width * 7.88,
    canvas.height * 0.52,
    560,
    canvas.height * 0.1,
    1
  ),
];
class Bridge {
  constructor(a, b, w, h) {
    this.position = {
      x: a,
      y: b,
    };
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "./assets/bridge.png";
    this.isBlasted = false;
    this.blastFrame = 0;
    this.isDestroyed = false;
  }

  draw() {
    if (this.isBlasted) {
      ctx.drawImage(
        blastImages[this.blastFrame],
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else if (!this.isDestroyed) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
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
  new Bridge(canvas.width * 1.95, canvas.height * 0.5, 450, 70),
  new Bridge(canvas.width * 2.71, canvas.height * 0.5, 450, 70),
];

const player = new Player(ctx);

var last = canvas.width * 7.88;

function animationPlayer() {
  requestAnimationFrame(animationPlayer);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (player.position.x >= last + 800) {
    showGameOver();
    return;
  }
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

  player.update(ctx);

  player.updateBullets();

  platforms.forEach((platform) => {
    platform.draw(ctx);
    // platform.updateEnemies(ctx);

    platform.enemyAttack();
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
    platform.updateEnemies(ctx);
  });

  bridges.forEach((bridge) => {
    bridge.draw();
  });
}


// var count = 1;
let isJumping = false;
document.addEventListener("keydown", (event) => {
  switch (event.key) {

    case "ArrowRight":
      console.log("right");
      if (player.position.x <= 500) {
        player.velocity.x = 2;
      } else {
        player.velocity.x = 0;
        platforms.forEach((platform) => {
          platform.position.x -= speed;
          platform.enemyX -= speed + 2;
        });
        last -= speed;
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
      }
      player.changeImageLeft();
      break;
      
    case "ArrowUp":
      console.log("top");
      // if (count <= 2) {
      //   count++;
      //   player.velocity.y -= 10;
      //   player.currentIndex = 6;
      //   // player.changeImage();
      //   // player.changeImageRightUp();
      // } else count = 1;

      if (!isJumping) { 
        console.log("top");
        isJumping = true;
        player.velocity.y -= 15;
        player.currentIndex = 6;
      }
      break;

    case "w":
      console.log("w");
      player.setBulletDirection("up", true);
      player.shoot();
      break;
    case "s":
      player.setBulletDirection("down", true);
      player.shoot();
      break;
    case "a":
      player.setBulletDirection("left", true);
      player.shoot();
      break;
    case "d":
      player.setBulletDirection("right", true);
      player.shoot();
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
      isJumping = true;
      player.velocity.y -= 10;
      break;

    case "w":
      console.log("w");
      player.setBulletDirection("up", false);
      player.canShoot = true;
      break;
    case "s":
      player.setBulletDirection("down", false);
      player.canShoot = true;
      break;
    case "a":
      player.setBulletDirection("left", false);
      player.canShoot = true;
      break;
    case "d":
      player.setBulletDirection("right", false);
      player.canShoot = true;
      break;
  }
});

//collision detection
function collisionPlatform(
  playerX,
  playerY,
  playerW,
  playerH,
  platformX,
  platformY,
  platformW,
  platformH,
  playerVelY,
  playerVelX
) {
  if (
    playerY + playerH <= platformY &&
    playerY + playerH + playerVelY >= platformY &&
    playerX + playerW >= platformX &&
    playerX <= platformX + platformW
  ) {
    bridges.forEach((bridge) => {
      if (
        !bridge.isBlasted &&
        playerY + playerH >= bridge.position.y &&
        playerVelX >= 0 &&
        playerX + playerW >= bridge.position.x &&
        playerX <= bridge.position.x + bridge.width
      ) {
        bridge.blast();
      }
    });
    return true;
  } else {
    bridges.forEach((bridge) => {
      if (
        !bridge.isBlasted &&
        playerY + playerH >= bridge.position.y &&
        playerVelX >= 0 &&
        playerX + playerW >= bridge.position.x &&
        playerX <= bridge.position.x + bridge.width
      ) {
        bridge.blast();
      }
    });
    return false;
  }
}
