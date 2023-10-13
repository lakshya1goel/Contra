const gravity = 1.2;
function generateUniqueID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
export default class Enemy {
  constructor(x, y, width, height) {
    this.id = generateUniqueID();
    this.position = {
      x: x,
      y: y,
    };
    this.health = 100;
    this.width = width;
    this.height = height;
    this.speed = 6;
    this.speedY = 0;
    this.direction = 1;
    this.EnemyImg = [
      "./assets/flying_enemies/tile000.png",
      "./assets/flying_enemies/tile001.png",
    ];

    this.currentIndex = 0;
    this.img = new Image();
    this.img.src = this.EnemyImg[this.currentIndex];
  }

  changeImage() {
    this.frameCount++;

    if (this.frameCount % 10 === 0) {
      this.currentIndex = (this.currentIndex + 1) % 2;
      this.img.src = this.EnemyImg[this.currentIndex];
    }
  }
  
      changeImage() {
        if(this.currentIndex%10==0)
        {
          console.log("hi 1"+this.currentIndex);
          this.img.src = this.EnemyImg[(this.currentIndex %2)];
        
        }
        console.log("hi2"+this.currentIndex);
        this.currentIndex = (this.currentIndex + 1) ;
        
      }

      draw(ctx) {
        if (ctx) {
          ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
        }
      }
      update(ctx) {
        if (ctx) {
          this.changeImage();
          this.draw(ctx);
          this.position.x -= this.speed;
        }
      }
      hitByBullet() {
        this.health -= 100; 
    
        if (this.health <= 0) {
          this.defeated = true;
        }
      }
    
      isDefeated() {
        return this.defeated;
      }
}