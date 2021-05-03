
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground,treeImg,floor,tree;
var stone1,chain1;
var boyImage;
var Mango1,Mango2,Mango3,Mango4,Mango5;



function preload()
{
	boyImage=loadImage("boy.png")
	treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	image(treeImg,600,380)
	image(boyImage,96,634)
		

	
	//Create the Bodies Here.
	stone1=new stone(133,626,45)
	chain1=new chain(stone1.body,{x:133,y:626})
	

	Mango1 = new mango(479,416,40);
	Mango2 = new mango(446,430,40);
	Mango3 = new mango(505,477,40);
	Mango4 = new mango(501,433,40);
	Mango5 = new mango(520,500,40);
	floor = new Ground(454,472,800,20)
	Engine.run(engine);
}


function draw() {
	Engine.update(engine)
	rectMode(CENTER);
	background(255);
    
	textSize(35)
	


	text("Press the space key to play again!",52,43)

   

	image(treeImg,400,350,150,350)
	image(boyImage,121,580,100,200)
  
  

 //floor.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  stone1.display();
  chain1.display();



 detectcollision(stone1,Mango1);
 detectcollision(stone1,Mango2);
 detectcollision(stone1,Mango3);
 detectcollision(stone1,Mango4);
 detectcollision(stone1,Mango5);


  
  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	chain1.fly()
}

function keyPressed(){
	if (keyCode === 32){
		stone1=new stone(133,626,45)
	chain1=new chain(stone1.body,{x:133,y:626})
	Mango1 = new mango(479,416,40);
	Mango2 = new mango(446,430,40);
	Mango3 = new mango(505,477,40);
	Mango4 = new mango(442,479,40);
	Mango5 = new mango(520,500,40);
	}
}



