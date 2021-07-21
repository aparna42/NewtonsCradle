const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
    createCanvas(800, 600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    var bob_options = {
        restitution: 0.1,
        density: 0.1,
        friction: 0
    }

    var roof_options = {
        isStatic: true
    }

    roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
    World.add(world, roof);

    bob1 = Bodies.circle(320, 380, 20, bob_options);
    World.add(world, bob1);

    bob2 = Bodies.circle(360, 380, 20, bob_options);
    //Add the correct bobs to the world after they are created 
    World.add(world, bob2);

    bob3 = Bodies.circle(400, 380, 20, bob_options);
    World.add(world, bob3);

    bob4 = Bodies.circle(440, 380, 20, bob_options);
    World.add(world, bob4);

    bob5 = Bodies.circle(480, 380, 20, bob_options);
    World.add(world, bob5);

    //The connection to bob1 is at an offset of -80 from the centre of the roof in the x-axis
    //For bob2: -40, bob3: 0, bob4: 40 and bob5: 80

    rope1 = new rope(bob1, roof, -80, 0);
    rope2 = new rope(bob2, roof, -40, 0);
    //Create 3 more rope objects to connect bob3 - bob5 to the roof
    Engine.run(engine);


}

function draw() {
    rectMode(CENTER);
    background("#99004d");

    rect(roof.position.x, roof.position.y, 230, 20);

    //call display() to show the remaining 3 ropes here
    rope1.display();
    rope2.display();

    //update the correct bob names
    ellipse(bob1.position.x, bob1.position.y, 40, 40);
    ellipse(bob2.position.x, bob2.position.y, 40, 40);
    ellipse(bob3.position.x, bob3.position.y, 40, 40);
    ellipse(bob4.position.x, bob4.position.y, 40, 40);
    ellipse(bob5.position.x, bob5.position.y, 40, 40);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        //Write the code to apply force on the first bob
    }
}