const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const gravity = 0.7;
class Player {
    constructor() {
        this.position = {
            x : 150,
            y : 150
        }

        this.width = 120;
        this.height = 120;
        this.speed = 10;

        this.velocity = {
            x : 0,
            y : 0
        }

        this.img = new Image();
        this.img.src = "./assets/PR/player1.png";
    }

    draw() {
        // ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
        
    }
}

const player = new Player();

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
}

animation();

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowRight':
            console.log('right');
            player.velocity.x += 10;
            break;
        case 'ArrowLeft' :
            console.log('left');
            player.velocity.x -=10;
            break;
        case 'ArrowDown':
            console.log('down');
            player.velocity.y += 10;
            break;
        case 'ArrowUp':
            console.log('top');
            player.velocity.y -= 10;
            break;
    }
})


document.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'ArrowRight':
            console.log('right');
            player.velocity.x = 0;
            break;
        case 'ArrowLeft' :
            console.log('left');
            player.velocity.x = 0;
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowUp':
            console.log('top');
            player.velocity.y -= 5;
            break;
    }
})
