
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);
	bin = new Dustbin(680,650,20,80,{isStatic:true});
	bin2 = new Dustbin(500,650,20,80,{isStatic:true});
	bin3 = new DustbinImage(590,700,160,20,{isStatic:true});
	paper = new Paper(200,200,25);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();
	bin.display();
	bin2.display();
	bin3.display();
	paper.display();

	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


