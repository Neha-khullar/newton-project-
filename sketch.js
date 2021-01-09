
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
//var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobobject6,
//bobobject7;
//var sling1,sling2,sling3,sling4,sling5,sling6,sling7;
 

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
	 
	 

	//Create the Bodies Here.
	 roof=new Ground(width/2,height/4,width/7,30);
	 bobDiameter=40;
	 startPositionX=width/2;
	 startPositionY=height/4+400;
	 bobobject1= new Bob(startPositionX-bobDiameter*2,startPositionY,bobDiameter);
	 bobobject2= new Bob(startPositionX-bobDiameter,startPositionY,bobDiameter);
	 bobobject3= new Bob(startPositionX,startPositionY,bobDiameter);
	 bobobject4= new Bob(startPositionX+bobDiameter,startPositionY,bobDiameter);
	 bobobject5= new Bob(startPositionX+bobDiameter*2,startPositionY,bobDiameter);
	  

	 sling1= new Rope (bobobject1.body,roof.body,-bobDiameter*2,0);
	 sling2= new Rope ( bobobject2.body,roof.body,-bobDiameter*1,0);
	 sling3=  new Rope (bobobject3.body,roof.body,0,0);
	 sling4= new Rope ( bobobject4.body,roof.body,bobDiameter*1,0);
	 sling5= new Rope (bobobject5.body,roof.body,bobDiameter*2,0);
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cream");
  roof.display();
  sling1.display();
	 sling2.display();
	 sling3.display();
	 sling4.display();
	 sling5.display();
  

  bobobject1.display();
	 bobobject2.display();
	 bobobject3.display();
	 bobobject4.display();   
	 bobobject5.display();
	  
	  
	  

  drawSprites();
 
}
function keyPressed(){

	if (keyCode ===UP_ARROW){
	Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
	}

}
function drawLine(constraint)
{
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y

line (bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);






}


