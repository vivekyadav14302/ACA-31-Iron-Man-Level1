
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg1 = createSprite(580,-300);
  bg.addImage(backgroundImg);
  bg1.addImage(backgroundImg);
  bg.scale = 2;
  bg1.scale = 2;
  bg.velocityY = 3;
  bg1.velocityY = 3;
  ironMan = createSprite(100,450,150,40);
  ironMan.addImage(ironManImg);
 ironMan.scale = 0.3
}

function draw() {
  if(keyDown("up")){
    ironMan.velocityY = -10;
  }

  if(keyDown("left")){
    ironMan.x = ironMan.x - 5;
  }
    
  if(keyDown("right")){
    ironMan.x = ironMan.x + 5;
  }
    ironMan.velocityY = ironMan.velocityY + 0.5;

    if(bg.y > 900){
      bg.y = -300
    }

    if(bg1.y > 900){
      bg1.y = -300
    }
    drawSprites();
   
}

