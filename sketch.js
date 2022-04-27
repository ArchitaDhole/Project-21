const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var b1;

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isSatatic: false,
		restitution: 0,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);


	ground = new Ground(400, 590, 795, 10);
	leftS = new Ground(540, 545, 7, 80);
	rightS = new Ground(700, 545, 7, 80);

	rectMode(CENTER);

}


function draw() {
	background(0);

	ellipse(ball.position.x, ball.position.y, 20);

	ground.display();
	leftS.display();
	rightS.display();

	keyPressed();

	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.2 });
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: -.2, y: 0 });
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: .2, y: 0 });
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 0.2 });
	}
}
