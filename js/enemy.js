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
        this.currentIndex = 0;

        this.EnemyImg = ["./assets/flying_enemies/tile000.png", 
                          "./assets/flying_enemies/tile001.png"];

        
        this.img = new Image();
      this.img.src = this.EnemyImg[this.currentIndex];
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
}