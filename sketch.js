let buttonSpeedUp;
let buttonSpeedDown;

let cx = 0;
let cy = 0;
let cSize = 50;
let vx = 1;
let vy = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  buttonSpeedDown = createButton('Speed Down!')
  buttonSpeedUp = createButton('Speed Up!');
  
  buttonSpeedDown.mousePressed(speedDown);
  buttonSpeedUp.mousePressed(speedUp);
  
  repositionButtons();
  
  cx = width/2;
  cy = height/2;
}

function speedUp() {
  vx *= 1.1;
  vy *= 1.1;
  
  vx = constrain(vx, -10, 10);
  vy = constrain(vy, -10, 10);
}

function speedDown() {
  vx *= .9;
  vy *= .9;
  
  vx = constrain(vx, -10, 10);
  vy = constrain(vy, -10, 10);
}

function draw() {
  background(220);
  
  fill(255, 0, 0);
  ellipse(cx, cy, 50);
  
  cx += vx;
  cy += vy;
  
  // Constrain between the edges of screen.
  cx = constrain(cx, 0+cSize/2, width-cSize/2);
  cy = constrain(cy, 0+cSize/2, height-cSize/2);
  
  if (cx + cSize/2 >= width || cx - cSize/2 <= 0) {
    vx *= -1;
  } 
  
  if (cy + cSize/2 >= height || cy - cSize/2 <= 0) {
    vy *= -1;
  } 
  
  textSize(36);
  textAlign(CENTER);
  text(`VX: ${vx.toFixed(1)} | VY: ${vy.toFixed(1)}`, width/2, height/2);
}

function repositionButtons() {
  
  // Position based on top left
  buttonSpeedDown.position(100, height-100);
  buttonSpeedUp.position(width-100-buttonSpeedUp.width, height-100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionButtons();
}


