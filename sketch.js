const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground1;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,0,50,50);
    box2 = new Box(270,350,30,50);
    box3 = new Box(190,350,30,20);
    box4 = new Box(170,100,30,70);
    box5 = new Box(220,150,25,60);
    box6 = new Box(190,190,5,90);
    box7 = new Box(200,-50,10,60);
    box8 = new Box(250,30,50,30);
   
    ground1= new ground(300,370,600,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
    
    
    
    ground1.display();
   
}