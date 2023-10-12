

const gravity=1.2
export default class Enemy{
    constructor(x, y, width, height) {
        this.position = {
          x: x,
          y: y,
        };
        this.width = width;
        this.height = height;
        this.speed = 6;
        this.speedY = 0;
        this.direction = 1; 
        
      }
      draw(ctx) {
        if (ctx) {
          ctx.fillStyle = "red";
          ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
      }
      update(ctx) {
        if (ctx) {
          this.draw(ctx);
          this.position.x -= this.speed;
        }
      }
}