const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onRope";


function preload()
{

}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(800,500,10,10);
	ground = new Ground(500,590,1000,20);
	boy = new Boy(100,450,15,5);
	stone = new Stone(100,430,5);

	rope1 = new Rope(stone.body,{x:100, y:450});


	mango1 = new Mango(650,200,20);
	mango2 = new Mango(800,150,20);
	mango3 = new Mango(980,200,20);
	mango4 = new Mango(880,250,20);
	mango5 = new Mango(730,250,20);
	mango6 = new Mango(900,120,20);
	mango7 = new Mango(730,100,20);
	mango8 = new Mango(830,50,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  tree.display();
  ground.display();
  stone.display();

  boy.display();

  rope1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display(); 
  mango6.display();
  mango7.display();
  mango8.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);

  drawSprites();
 
}

function mouseDragged(){
  if (gamestate = "launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  rope1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(stone.body,{x:100, y:425});
     rope1.attach(stone.body);
  }
}
function detectollision(stone,mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<25)
  {
    Matter.Body.setStatic(mango.body,false)
  }
  
}






