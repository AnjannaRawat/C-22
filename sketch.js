const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world;
var engine;
var Box;
var Ground;
function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var GroundOption={
    isStatic:true
  }
  Ground=Bodies.rectangle(400,370,800,30,GroundOption);
  World.add(world,Ground)

  var BoxOption={
    restitution:0.8  }
    Box=Bodies.circle(30,50,20,BoxOption);
    World.add(world,Box)
    

}

function draw() {
  background("pink");  
Engine.update(engine)
rectMode(CENTER)
rect(Ground.position.x,Ground.position.y,800,30)
ellipseMode(RADIUS)
ellipse(Box.position.x,Box.position.y,20,20)

  drawSprites();
}