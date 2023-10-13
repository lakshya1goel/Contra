import Bullet from "./bullet.js";

const gravity = 0.7;

export default class Player {
  constructor(ctx) {
    this.position = {
      x: 150,
      y: 150,
      
    };

    this.diedImg = new Image();
    this.diedImg.src = "./assets/PR/death2.png";

    this.isDead = false;

    this.bulletDirection = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
    this.enemiesHit = new Set();
    this.ctx = ctx;
    this.width = 100;
    this.height = 100;
    this.speed = 5;
    this.canShoot = true;
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.bullets = [];

    this.currentIndex = 0;
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

    this.currentIndexLeft = 0;
    this.playerImgLeft = [
      "./assets/PL/player.png",
      "./assets/PL/player1.png",
      "./assets/PL/player2.png",
      "./assets/PL/player3.png",
      "./assets/PL/player4.png",
      "./assets/PL/player5.png",
      "./assets/PL/death1.png",
      "./assets/PL/death2.png",
      "./assets/PL/death3.png",
      "./assets/PL/shooting1.png",
      "./assets/PL/shooting2.png",
      "./assets/PL/shooting3.png",
      "./assets/PL/up.png",
      "./assets/PL/down.png",
    ];

    this.currentIndexRightUp = 0;
    this.playerImgRightUp = [
      "./assets/PL/jump1.png",
      "./assets/PL/jump2.png",
      "./assets/PL/jump3.png",
      "./assets/PL/jump4.png",
    ];

    this.img = new Image();
    this.img.src = this.playerImg[this.currentIndex];

    // this.img.src = this.playerImgLeft[this.currentIndex];
    // if (this.position.y + this.height + this.velocity.y >= canvas.height) {
    //   this.currentIndex = 1;
    //   this.img.scr = this.player[this.currentIndex];
    // }
  }

  changeImage() {
    if (this.currentIndex % 10 == 0) {
      this.img.src = this.playerImg[this.currentIndex % 6];
    }
    this.currentIndex = this.currentIndex + 1;
  }

  changeImageLeft() {
    if (this.currentIndexLeft % 10 == 0) {
      this.img.src = this.playerImgLeft[this.currentIndexLeft % 6];
    }
    this.currentIndexLeft = this.currentIndexLeft + 1;
  }

  // changeImageRightUp() {
  //   if (this.currentIndexRightUp % 2 == 0) {
  //     this.img.src = this.playerImgRightUp[this.currentIndexRightUp % 6];
  //   }
  //   this.currentIndexRightUp = this.currentIndexRightUp + 1;
  // }

  draw(ctx) {
    if (this.isDead) {
      ctx.drawImage(this.diedImg, this.position.x, this.position.y+50, 100, 50);
    } 
    else {
      ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
  }

  update(ctx) {
    this.draw(this.ctx);
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y < canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }

  setBulletDirection(direction, value) {
    this.bulletDirection[direction] = value;
  }

  shoot() {
    if (!this.canShoot) {
      return;
    }
    const bulletSpeed = 5;
    const bulletVelocity = {
      x: 0,
      y: 0,
    };

    if (this.bulletDirection.up) {
      bulletVelocity.y = -bulletSpeed;
    } else if (this.bulletDirection.down) {
      bulletVelocity.y = bulletSpeed;
    }

    if (this.bulletDirection.left) {
      bulletVelocity.x = -bulletSpeed;
    } else if (this.bulletDirection.right) {
      bulletVelocity.x = bulletSpeed;
    }

    let bulletX = this.position.x + this.width;
    let bulletY = this.position.y + this.height / 2;

    const newBullet = new Bullet(bulletX, bulletY, bulletVelocity);
    this.bullets.push(newBullet);

    this.canShoot = false;
  }

  updateBullets(enemies) {
    this.bullets.forEach((bullet, bulletIndex) => {
      bullet.update();
      bullet.draw(this.ctx);

      // Check for collisions with enemies
      for (let enemyIndex = 0; enemyIndex < enemies.length; enemyIndex++) {
        const enemy = enemies[enemyIndex];

        if (
          bullet.position.x < enemy.position.x + enemy.width &&
          bullet.position.x + bullet.width > enemy.position.x &&
          bullet.position.y < enemy.position.y + enemy.height &&
          bullet.position.y + bullet.height > enemy.position.y
        ) {
          // Bullet hits the enemy - remove the bullet
          this.bullets.splice(bulletIndex, 1);

          // Handle the impact on the enemy (e.g., decrease enemy health)
          enemy.hitByBullet(); // You need to implement this method in your Enemy class
        }
      }
    });
  }
  hitEnemy(enemy) {
    this.enemiesHit.add(enemy.id);
    if (this.enemiesHit.size >= 5) 
    {
      this.isDead = true;
    }
  }
}
