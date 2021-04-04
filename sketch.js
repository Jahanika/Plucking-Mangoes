const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    tree = new Tree(800,680,10,10);
    mango1 = new Mango(750,170,10);
    mango2 = new Mango(650, 250,10);
    mango3 = new Mango(900,150,10);
    mango4 = new Mango(1000,200,10);
    mango5 = new Mango(850,50,10);
    stone1 = new stone(100,600,10);
    sling = new Slingshot(stone1.body, {x: 190,y:535})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  
  background(0);
  image(boy, 150,450,200,300)
ground.display()
tree.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
stone1.display()
detectollision(stone1,mango1)
detectollision(stone1,mango2)
detectollision(stone1,mango3)
detectollision(stone1,mango4)
detectollision(stone1,mango5)

sling.display()


  drawSprites();
 
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    sling.attach(stone1.body);
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly()
}


