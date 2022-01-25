
var PLAY=0
var END=1
var gameState =PLAY
var l=3;


function preload()
{
	obstacle1=loadImage("obstacle1.png")
	obstacle2=loadImage("obstacle2.png") 
	obstacle3=loadImage("obstacle3.png")
	bulletImage=loadImage("bulltet.png")
	backgroundImage=loadImage("skyimage.png")
	fighterplaneImage=loadImage("fighterplane.png")
}

function setup() {
	createCanvas(800, 550)
	ground=createSprite(400,350)
	ground.addImage(backgroundImage)
	ground.velocityY=-4;
	fighterplane=createSprite(450,500,50,45);
	fighterplane.addImage(fighterplaneImage)
	
	obstacleGroup=new Group()
		 bulletGroup=new Group()
	
}


function draw() {
  rectMode(CENTER);
  background("blue");
  if(gameState==PLAY){

  
  if(ground.y<0){
	  ground.y=150

  }

  
  if(keyWentDown("space")){
	bullet=createSprite(fighterplane.x,fighterplane.y)
	 bullet.velocityY=-4 
	 bullet.scale=0.2
	 bullet.addImage(bulletImage)
	 bulletGroup.add(bullet)

  }
  if(keyDown("left")){
fighterplane.x=fighterplane.x-5	  
  }
  if(keyDown("right")){
	  fighterplane.x
	  =fighterplane.x+5
	  
  }
  for(var i=0;i<obstacleGroup.length;i++){

  
  if(obstacleGroup.get(i).isTouching(bulletGroup)){
	  obstacleGroup.get(i).destroy()
	  

  }
  if(obstacleGroup.isTouching(fighterplane)){
	l=l-1  
	
  }
  }
  
  obstacles();
}
if(gameState==END){
	ground.velocityY=0;
}
  drawSprites();
  textSize(25)
  strokeWeight(3)
  stroke("white")
  text("lives="+l,600,100)
 if(l==0){
	 gameState=END
	 obstacleGroup.destroyEach()
 }
}
function obstacles() 
{ if (frameCount%50===0) {
	var obstacle = createSprite(200,0,10,10); 
	obstacle.velocityY = 3;
	obstacle.scale = 0.3;
	 obstacle.x = Math.round(random(0,700));
	 obstacleGroup.add(obstacle)
	  var rand = Math.round(random(1,3))
	 switch(rand){
		  case 1:obstacle.addImage(obstacle1);
		   break
		    case 2:obstacle.addImage(obstacle2);
		   break
		    case 3:obstacle.addImage(obstacle3); 
		   break
		    
			default:break
		 } }}


























