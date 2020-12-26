const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var engine,world; 
var ball,dustbin; 
var ground; 
var ballImage,dustbinImage;

function preload() {
//ballImage=loadImage("PAPER.jpg");
//dustbinImage=loadImage("DUSTBIN.png");  
} 

function setup()
{ 
    createCanvas(1000, 400); 
    engine = Engine.create(); 
    world = engine.world;
    ball = new Paper(100,120,20);
    

    ground = new Ground(500,380,2000,20)
    ds1=new Dustbin(700,370,200,20);
    ds2=new Dustbin (800,330,20,100);
    ds3=new Dustbin (600,330,20,100);
    Engine.run(engine);
    
} 

function draw() 
{ 
rectMode(CENTER);
background(0);
ball.display();
ground.display();
ds1.display();
ds2.display();
ds3.display();
Engine.update(engine);


} 
                
function keyPressed()
{
if(keyCode === UP_ARROW)
{ 
Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
} 
}
