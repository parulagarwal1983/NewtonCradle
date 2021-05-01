
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bob1 = new Bob(250,100,20);
  bob2 = new Bob(300,100,20);
	bob3 = new Bob(350,100,20);
	bob4 = new Bob(400,100,20);
	bob5 = new Bob(450,100,20);
	
  roof = new Ground(350,100,300,25);

	rope1 = new Rope(bob1.body,{x:250,y:100});
	rope2 = new Rope(bob2.body,{x:300,y:100});
	rope3 = new Rope(bob3.body,{x:350,y:100});
	rope4 = new Rope(bob4.body,{x:400,y:100});
	rope5 = new Rope(bob5.body,{x:450,y:100});
	
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);

  background("lightblue");

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:115});
  }
}