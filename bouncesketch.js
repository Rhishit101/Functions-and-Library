var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 30, 50);
  movingRect = createSprite(200, 600, 50, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect.velocityY= 3;
  movingRect.velocityY = -3;
}

function draw() {
  background(255,255,255);  

 
  

bounceOff(movingRect,fixedRect);
  



  drawSprites();
}

