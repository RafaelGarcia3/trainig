class Ball {
    constructor(x, y, velX, velY, color, size) {
        // horizontal and vertical coordinates where the ball starts on the screen
        this.x = x;
        this.y = y;

        // horizontal and vertical velocity
        this.velX = velX;
        this.velY = velY;
        this.color = color;

        //radius in pixels
        this.size = size;
    }

    draw() {
        // to state that we want to draw a shape on the paper
        ctx.beginPath();

        // to state that we want to draw a shape on the paper.
        ctx.fillStyle = this.color;

        // to trace an arc shape on the paper
        // x and y position of the arc's center
        // radius of the arc
        // last two parameters specify the start and end number of degrees around the circle
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        ctx.fill();
    }    

    // check whether the ball has reached the edge of the canvas
    update() {
        // if x is greater than the width of the canvas (the ball is going off the right edge)
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        // if x is smaller than 0 (the ball is going off the left edge)
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }

        // if y is greater than the height of the canvas (the ball is going off the bottom edge)
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
        
        // if y is smaller than 0 (the ball is going off the top edge)
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
    }      
}
 
// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
 
const balls = [];

while (balls.length < 20) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

// Continuously animates the canvas:
// Clears the canvas with a faded black fill.
// Updates and redraws all balls.
// Uses requestAnimationFrame for smooth animation.
function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
    }
  
    requestAnimationFrame(loop);
}
  
loop();

