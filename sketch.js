
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,490,1600,20);
	ball=new Ball(100,400,20)
	box1=new Box(550,430,20,100);
	box2=new Box(640,470,200,20);
	box3=new Box(750,430,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
	}
}
