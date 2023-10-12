export default class Bullet {
    constructor(x, y,velocityX) {
      this.position = {
        x: x,
        y: y,
      };
      this.width = 10;
      this.height = 10;
      this.img = new Image();
      this.img.src = "./assets/bullet1.png";
      this.velocity = velocityX;
    }
  
    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  
    draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
  }