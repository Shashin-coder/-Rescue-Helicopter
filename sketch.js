


var helicopterIMG, helicopterSprite, packageIMG,sky,clouds,grass,grass1,grassimg,grass2,bricks,bricksimg,box1,wall1,wall2,wall3,wall1body,wall2body,wall3body;
var ground,man1,manimg;
var packageSprite;
var packageBody;

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
	manimg=loadImage("man1.png")
	bricksimg=loadImage("bricks.png")



	
	
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
	bricks=createSprite(width/2-10, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-36, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+15, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+40, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+60, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-60, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-86, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-86, 625, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-86, 598, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2-86, 575, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+86, 650, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+86, 625, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+86, 598, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	bricks=createSprite(width/2+86, 575, 10,10);
	bricks.addImage(bricksimg);
	bricks.scale=0.03;
	
	
	
	




	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	wall1=createSprite(width/2, 620, 150,30);
	wall2=createSprite(width/2+120,580 , 30,90);
	wall3=createSprite(width/2-120,580, 30,90);
	
	
	man1=createSprite(600,600, 10,10);
	man1.addImage(manimg)

	man1.scale=0.13

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
	wall1body = Bodies.rectangle(width/2, 650, 150,30, {isStatic:true} );
	 World.add(world, wall1body);
	 wall2body = Bodies.rectangle(width/2+90, 620, 30,90, {isStatic:true} );
 	World.add(world, wall2body);

	wall3body= Bodies.rectangle(width/2-90, 620, 30,90, {isStatic:true} );
	 World.add(world,wall3body);
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  wall1.x=wall1body.position.x;
  wall1.y=wall1body.position.y;
  wall2.x=wall2body.position.x;
  wall2.y=wall2body.position.y;
  wall3.x=wall3body.position.x;
  wall3.y=wall3body.position.y;
  
  wall1.visible=false;
  wall3.visible=false;
  wall2.visible=false;
  

  
  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
    
  }
}




