const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var Polygon;
var slingshot1;
let img;
function preload() {
  img = loadImage('assets/gradient.png');
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //Bodies
  ground1= new Ground(200,200,50,50)
  box1=new Box (330,235,30,40);
  box2=new Box (360,235,30,40);
  box3=new Box (390,235,30,40);
  box4=new Box (420,235,30,40);
  box5=new Box (450,235,30,40);
 
  box6=new Box (360,195,30,40);
  box7=new Box (390,195,30,40);
  box8=new Box (420,195,30,40);

  box9=new Box (390,155,30,40);

  image(img, 0, 0);
  image(img, 50, 0, 40, 20, 50, 50, 50, 50);

 Engine.run(engine);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon1.display();
}