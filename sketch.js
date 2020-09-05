var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(600, 200, 50, 50);
  fixedRect.velocityX = 3;
  movingRect.velocityX= -3;
}

function draw() {
  background("black");
  drawSprites();
  if (fixedRect.x - movingRect.x <= fixedRect.width /2 + movingRect.width /2 &&
    movingRect.x - fixedRect.x <= movingRect.width /2 + fixedRect.width /2 &&
    fixedRect.y - movingRect.y <= fixedRect.height /2 + movingRect.height /2 &&
    movingRect.y - fixedRect.y <= movingRect.height /2 + fixedRect.height /2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "gray";
    fixedRect.velocityX = -fixedRect.velocityX;
    movingRect.velocityX = -movingRect.velocityX;
  }else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }
}