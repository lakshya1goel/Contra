import Bullet from "./bullet.js";

const gravity = 0.7;

export default class Player {
    constructor(ctx) {
      this.position = {
        x: 150,
        y: 150,
      };
  
      this.bulletDirection = {
        up: false,
        down: false,
        left: false,
        right: false,
      };
      this.ctx=ctx;
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
  
  
      this.img = new Image();
      this.img.src = this.playerImg[this.currentIndex];
    }
  
    changeImage() {
      if(this.currentIndex%10==0)
      {
        this.img.src = this.playerImg[this.currentIndex%6];
      }
      this.currentIndex = (this.currentIndex + 1) ;
      
    }
  
    draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
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
  
    updateBullets() {
      this.bullets.forEach((bullet, index) => {
        bullet.update();
        bullet.draw(this.ctx);
  
        if (bullet.position.x > canvas.width) {
          this.bullets.splice(index, 1);
        }
      });
    }
  }
  