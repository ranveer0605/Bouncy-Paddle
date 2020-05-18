var ball,ballimg;
var paddle,paddleimg;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX= 3;
  ball.velocityY=3;
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
background(205,153,0);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  if(ball.bounceOff(paddle)){
  Random();
  }
  paddle.collide(edges);
  
  if(keyWentDown(UP_ARROW)){
    paddle.velocityY = -3;
    paddle.y=paddle.y-20;
  }
    
  
  if(keyWentDown(DOWN_ARROW)){
  paddle.velocityY = 3;
    paddle.y=paddle.y+20;
  }
  if(ball.x>400){
     reset();
     }
  drawSprites();
  
}

function Random()
{
  ball.velocityY=random(-8,8);
}

function reset()
{
  ball.x=60;
  ball.y=200;
  ball.velocityY=3;
  ball.velocityX=3;
  
  paddle.x=350;
  paddle.y=200;
  paddle.velocityY= 0;
}
