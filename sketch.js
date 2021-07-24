const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,blower,ball2,blowermouth;
var button;

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;


  blowermouth = new Blowermouth(width / 2 + 70, height / 2,100,120);
  blower = new Blower(width / 2 - 50,height / 2 + 50,200,20);
  ball = new Ball(width / 2 + 80,height / 2 -80,40,40);

  button = createButton("Click To Blow");
  button.position(700,400);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background("blue"); 

  Engine.update(engine);
  

  ball.show(); 
  blower.show();
  blowermouth.show();

}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.01});
}