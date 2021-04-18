const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new Box(700,320,70,70);
    box2 = new Box(400,320,70,70);
    box3 = new Box(790,440,70,70);
    box4 = new Box(400,440,70,70);
    box5 = new Box(880,100,70,70);
    log1 = new Log(810,360,300,PI / 2);
    log2 = new Log(810,380,300,PI / 2);
    log3 = new Log(860,320,150,PI / 7);
    log4 = new Log(570,320,150,-PI / 7);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();


    plane.display();
    hammer.display();

    
 
}