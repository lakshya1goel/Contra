import Enemy from "./enemy.js";
let count = 0;
let cnt = 1;
export default class Platform {
    constructor(a, b, w, h,c) {
        this.position = {
            x: a,
            y: b
        };
        this.width = w;
        this.height = h;
    }
    draw(ctx) {
        ctx.globalAlpha = 0;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.globalAlpha = 1; 
    }
    
}
