import Enemy from "./enemy.js"
let count=0;
export default class Platform {
    constructor(a, b, w, h) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
       
        this.enemies=[];
        this.PlatformX=this.position.x;
        this.PlatformY=this.position.y-40-this.height;

    }
    draw(ctx) {
        ctx.globalAlpha = 0;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.globalAlpha = 1; 
    }
    enemyAttack(){
        if(count>1)
        {
            const newEnemy=new Enemy(this.PlatformX,this.PlatformY,100, 100)
        this.enemies.push(newEnemy);
        }
        
       ++count;
    }
    updateEnemies(ctx){
        
        this.enemies.forEach((enemy, index) => {
            if (enemy) {
              enemy.update(ctx);
              enemy.draw(ctx);
        
              if (enemy.position.x <= this.position.x) {
                this.enemies.splice(index, 1);
              }
            }
          });
    }
    
}
