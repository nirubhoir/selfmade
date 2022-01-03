var laser1, laser2, enemy1, enemy2, enemy3,enemy4, space, spaceship
var laser1Img, laser2Img


function preload(){

  
  space=loadImage("assets/red space.jpg")
  ship=loadImage("assets/spaceship1.png")
  enemy=loadImage("assets/enemy1.png")
  enemy2=loadImage("assets/enemy2.png")
  enemy3=loadImage("assets/enemy3.png")
  enemy4=loadImage("assets/enemy4.png")
}


function setup() {
  createCanvas(displayWidth-100, displayHeight-100);
  

  spaceship = createSprite(600,500,50,10)
  spaceship.addImage(ship)
  spaceship.scale=0.5

  enemy1 = createSprite(200, 200, 50, 10)
  enemy1.addImage(enemy)
  enemy1.scale=0.6

  enemytwo = createSprite(900, 200, 50, 10)
  enemytwo.addImage(enemy2)
  enemytwo.scale=0.6

  enemythre = createSprite(500, 100, 50, 10)
  enemythre.addImage(enemy3)
  enemythre.scale=0.5

  
}

function draw() {

  if(RIGHT_ARROW){

   spaceship.X=+5 





  }





  background(space);  
  drawSprites();
}