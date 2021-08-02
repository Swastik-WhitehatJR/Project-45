const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var engine;
var canvas;
var board;
var wall1, wall2, wall3, wall4;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;
var player1, player2, player3, player4;
var pocket1, pocket2, pocket3, pocket4, pocket5, pocket6;
var gameState = 0;
var playerCount;
var allPlayers;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload() {
    board = loadImage("IMAGES/BOARD.jpg")
}


function setup() {
    canvas = createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;

    world.gravity.y = 0;

    game = new Game();
    game.getState();
    game.start();

    //objectName = Bodies.rectangle(x, y, width, height);
    //World.add(world, objectName);



    ball1 = new Ball(displayWidth/2.15, displayHeight/2.18, "IMAGES/ball_1.png")
    ball2 = new Ball(displayWidth/2.06, displayHeight/2.3, "IMAGES/ball_2.png")
    ball3 = new Ball(displayWidth/2.06, displayHeight/2.07, "IMAGES/ball_3.png")
    ball4 = new Ball(972, displayHeight/2.5, "IMAGES/ball_4.png")
    ball5 = new Ball(972, displayHeight/2.2, "IMAGES/ball_5.png")
    ball6 = new Ball(972, displayHeight/2, "IMAGES/ball_6.png")
    ball7 = new Ball(1020, 420, "IMAGES/ball_7.png")
    ball8 = new Ball(1020, 465, "IMAGES/ball_8.png")
    ball9 = new Ball(1020, 525, "IMAGES/ball_9.png")
    ball10 = new Ball(1020, 575, "IMAGES/ball_10.png")

    pocket1 = new Pocket(110, 110)
    pocket2 = new Pocket(960, 100)
    pocket3 = new Pocket(1810, 125)
    pocket4 = new Pocket(100, 960)
    pocket5 = new Pocket(960, 970)
    pocket6 = new Pocket(1810, 960)

    wall1 = new Wall(40, 50, 80, 10000)
    wall2 = new Wall(40, 40, 10000, 80)
    wall3 = new Wall(displayWidth - 32, 50, 80, 10000)
    wall4 = new Wall(40, displayHeight - 34, 10000, 80)
}


function draw() {
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
        background(board);

        Engine.update(engine);

        car1.display()
        car2.display()
        car3.display()
        car4.display()
    
        ball1.display();
        ball2.display();
        ball3.display();
        ball4.display();
        ball5.display();
        ball6.display();
        ball7.display();
        ball8.display();
        ball9.display();
        ball10.display();
    
        //pocket1.display();
        //pocket2.display();
        //pocket3.display();
        //pocket4.display();
        //pocket5.display();
        //pocket6.display();
    
        //wall1.display();
        //wall2.display();
        //wall3.display();
        //wall4.display();
    
        drawSprites();
      }
      if(gameState === 2){
        game.end();
      }

}

