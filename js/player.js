// import {canvas,ctx} from "./script.js";
// const playerImg = [
//     "./assets/PR/player1.png",
//     "./assets/PR/player2.png",
//     "./assets/PR/player3.png",
//     "./assets/PR/player4.png",
//     "./assets/PR/player5.png",   
// ];


// let currentIndex = 0;
// let lastTime = 0;
// function draw() {
//     const now = Date.now();
//     const deltaTime = now - lastTime;

//     if (deltaTime > 100) {  // Change the delay (100ms) if needed for smoother animation
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         const img = new Image();
//         img.onload = function() {
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//         }
//         img.src = playerImg[currentIndex];

//         currentIndex++;
//         if (currentIndex >= playerImg.length) {
//             currentIndex = 0;
//         }

//         lastTime = now;
//     }

//     requestAnimationFrame(draw);
// }

// document.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         draw();
//     }
// });