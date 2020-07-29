const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    world = engine.world;
    engine = Engine.create();

    polygon = Bodie.circle(50, 200, 20)
    world.add(world, polygon)

    slinhshot = new SlingShot(this.polygon, {x:100, y:200});
    ground1 = new Ground(330, 275, 150, 30)
    ground2 = new Ground(600, height, 1200, 20)

    block1 = new Block(330, 235, 30, 40)
    block2 = new Block(360, 235, 30, 40)
    block3 = new Block(390, 235, 30, 40)
    block4 = new Block(420, 235, 30, 40)
    block5 = new Block(450, 235, 30, 40)

    block6 = new Block(360, 195, 30, 40)
    block7 = new Block(390, 195, 30, 40)
    block8 = new Block(420, 195, 30, 40)

    block9 = new Block(390, 155, 30, 40)
    Engine.run(engine);
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);  
}
function mouseDragged(){
   Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
   slingshot.fly();
}