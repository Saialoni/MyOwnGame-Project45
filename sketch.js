var backgroundImg;
var earth, earthImage;
var plane, planeImage;
var ballImage,ball;

function preload(){
  backgroundImg = loadImage("assets/background.jpg");
  earthImage = loadImage("assets/earth.png");
  planeImage = loadImage("assets/fighterplane.png");
  ballImage = loadImage("assets/ball.png");
}

function setup() {
  createCanvas(1800,850);

  earth = createSprite(900, 700, 50, 50);
  earth.addImage("earth",earthImage);
  earth.scale = 0.2;

  plane = createSprite(900,500,50,50);
  plane.addImage("plane moving",planeImage);
  plane.scale = 0.3;
}


function draw() {
  background(backgroundImg);  

  //conditions to move the plane left and right
  if(keyDown("LEFT_ARROW")){
    plane.x = plane.x-30;
  }

  if(keyDown("RIGHT_ARROW")){
    plane.x = plane.x+30;
  }

  if(keyDown("space")){
    ball = createSprite(plane.x,400,50,50);
    ball.addImage(ballImage);
    ball.scale = 0.03;
    ball.velocityY = -2;
  }
  
  drawSprites();
}