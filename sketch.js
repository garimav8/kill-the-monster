const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 590);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 500, 1200, 20);

  hero = new Hero(250,890,260);
  rope = new Rope(hero.body, { x: 250, y: 30 });
  monster = new Monster(1000,350,300);

  box1 = new Box(500, 100, 70, 70);
  box5 = new Box(500,100,70,70);
  box6 = new Box(500,100,70,70);
  box7 = new Box(500,100,70,70);
  box8 = new Box(500,100,70,70);
  box9 = new Box(500,100,70,70);
  box10 = new Box(500,100,70,70);

  box2 = new Box(700, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);

  box14 = new Box(600,100,70,70);
  box15 = new Box(600,100,70,70);
  box16 = new Box(600,100,70,70);
  box17 = new Box(600,100,70,70);
  box18 = new Box(600,100,70,70);
  box19 = new Box(600,100,70,70);

  box20 = new Box(800,100,70,70);
  box21 = new Box(800,100,70,70);
  box22 = new Box(800,100,70,70);
  box23 = new Box(800,100,70,70);
  box24 = new Box(800,100,70,70);
  box25 = new Box(800,100,70,70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  rope.display();
  hero.display();
  monster.display();

}

function mouseDragged(){

Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}