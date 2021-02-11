const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Metal1 = new Metal(600,300);
    sand1 = new Rubber(700,450);
    hammer1 = new Hammer(200,200);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    Metal1.display();
    hammer1.display();
    ground.display();
    sand1.display();
}