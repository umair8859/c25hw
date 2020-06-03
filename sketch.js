const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1

var back;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    Drop = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop1 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop2 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop3 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop4 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop5 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop6 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop7 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop8 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop9 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop10 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop11 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop12 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop13 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop14 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop15 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop16 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop17 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop18 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop19 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop20 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop21 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop22 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop23 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop24 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop25 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop26 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop27 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop28 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop29 = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop30 = new drop(random(20, 1800),random(-40, -360),70,70);
    Dropb = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop1b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop2b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop3b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop4b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop5b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop6b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop7b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop8b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop9b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop10b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop11b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop12b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop13b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop14b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop15b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop16b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop17b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop18b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop19b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop20b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop21b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop22b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop23b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop24b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop25b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop26b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop27b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop28b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop29b = new drop(random(20, 1800),random(-40, -360),70,70);
    Drop30b = new drop(random(20, 1800),random(-40, -360),70,70);



}

function draw(){
    background(0);
    Engine.update(engine);
    Drop.display();
    Drop1.display();
    Drop2.display();
    Drop3.display();
    Drop4.display();
    Drop5.display();
    Drop7.display();
    Drop8.display();
    Drop9.display();
    Drop10.display();
    Drop11.display();
    Drop12.display();
    Drop13.display();
    Drop14.display();
    Drop15.display();
    Drop16.display();
    Drop17.display();
    Drop18.display();
    Drop19.display();
    Drop20.display();
    Drop21.display();
    Drop22.display();
    Drop23.display();
    Drop24.display();
    Drop25.display();
    Drop26.display();
    Drop27.display();
    Drop28.display();
    Drop29.display();
    Drop30.display();
    Dropb.display();
    Drop1b.display();
    Drop2b.display();
    Drop3b.display();
    Drop4b.display();
    Drop5b.display();
    Drop7b.display();
    Drop8b.display();
    Drop9b.display();
    Drop10b.display();
    Drop11b.display();
    Drop12b.display();
    Drop13b.display();
    Drop14b.display();
    Drop15b.display();
    Drop16b.display();
    Drop17b.display();
    Drop18b.display();
    Drop19b.display();
    Drop20b.display();
    Drop21b.display();
    Drop22b.display();
    Drop23b.display();
    Drop24b.display();
    Drop25b.display();
    Drop26b.display();
    Drop27b.display();
    Drop28b.display();
    Drop29b.display();
    Drop30b.display();


}