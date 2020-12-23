//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var MyEngine,world,ground,ball;

function setup() {
  var canvas = createCanvas(400,400);
  MyEngine = Engine.create();
  world = MyEngine.world;
  
  var options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
 
  var ball_option = {
    restitution : 1.0
  }

 ball = Bodies.circle(200,100,20,ball_option);
 World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(MyEngine);
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}