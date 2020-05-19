var bob;
var bar,chain;

var flag = 0;


  const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

    var engine;
    var world;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
bar  = new Ground(400,20,150,20);
bob = new Bob(400,200,50);
chain = new Chain(bob.body,bar.body)


}


function draw() {
  Engine.update(engine);
  background("black");  
  bob.display();
  bar.display();
  chain.display();
  drawSprites();

  if(flag ===1){
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
  }
  else{
    Matter.Body.setPosition(bob.body,{x:400,y:200});
  }
}
function keyPressed(){
  if(keyCode === 32){
    flag = 1;

  }
  if(keyCode === UP_ARROW){
    flag = 0;
  }
}