import Enemy from "./enemy.js"
let count=0;
let cnt = 1;
export default class Platform {
    constructor(a, b, w, h,c) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
        // this.enemy;
        // if(c==0)
        // {
        //     this.enemyX=2820;
        //     this.enemyY=100;
        // }
        // else
        // {
        //     this.enemyX=this.position.x;
        // this.enemyY=this.position.y-40-this.height;
        // }
    }
    draw(ctx) {
        ctx.globalAlpha = 0;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.globalAlpha = 1; 
    }
     
    // enemyAttack(){
    //         this.enemy=new Enemy(this.enemyX,this.enemyY,100, 100);
    // }
    // updateEnemies(ctx){
        
    //         if (this.enemy) {
    //             this.enemy.update(ctx)
    //         }
    // }
    
}
