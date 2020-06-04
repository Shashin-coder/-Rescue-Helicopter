var helicopterIMG, helicopterSprite, packageSprite,packageIMG,sky,clouds,grass,grass1,grassimg,grass2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	sky=loadImage("cumulus-cloud.jpg");
	grass=loadImage("grass.png")
	grassimg=loadImage("grass2.png")
	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
 clouds=createSprite(400,350,2000,700);

	clouds.addImage(sky);
	
	

	packageSprite=createSprite(width/2, 80, 5,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	grass1=createSprite(width/2, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2-100, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2-300, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2-200, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2+200, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2+300, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;

	grass1=createSprite(width/2+400, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2+100, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;
	grass1=createSprite(width/2-400, height-25, width,30);
	grass1.addImage(grass)
	grass1.scale=0.2;





	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,30);
	groundSprite.shapeColor=color(0,255,0)
	
	groundSprite.visible=false;
	

	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true,});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  clouds.VelocityX=5;
 // if(clouds.x>400){
//	  clouds.x=clouds.width/2
 // }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



