
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine, world, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);
//console.log(ground.position.x);
var ballo = {
restitution:2.0
}
ball = Bodies.circle(200, 100, 20, ballo)
World.add(world,ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) ;
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20);







}