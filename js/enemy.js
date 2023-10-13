const gravity = 1.2;
export default class Enemy {
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
    this.EnemyImg = [
      "./assets/flying_enemies/tile000.png",
      "./assets/flying_enemies/tile001.png",
    ];

    this.currentIndex = 0;
    this.img = new Image();
    this.img.src = this.EnemyImg[this.currentIndex];
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % 2;
    this.img.src = this.EnemyImg[this.currentIndex];
  }

  draw(ctx) {
    if (ctx) {
      ctx.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
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
