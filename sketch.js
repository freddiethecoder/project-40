var boy,bg,bgImg,boyImg;

function preload(){
bgImg=loadImage("lava background.png");
boyImg=loadAnimation("runningboy 1.png","boy2.png","boy3.png","boy 4.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(width/2,height/2,width/2+100,height-100)
  bg.addImage(bgImg)
  bg.scale = 3;
  bg.velocityX = -4

  boy=createSprite(90,height-270,10,40);
  boy.addAnimation("running",boyImg)
  boy.scale = 0.7;
}

function draw() 
{
  background(30);
  if(bg.x<0){
    bg.x=bg.width;
  }


  drawSprites();
}




