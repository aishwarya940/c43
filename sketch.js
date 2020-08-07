var tutorialMap, tutorial, playerImage, player, W, A, S, D, WE, AE, DE;
var gameState = "tutorialState";
var textState = 1;

function preload() {

  tutorialMap = loadImage("Tutorial.png");
  
 playerImage = loadImage("player/amg1.png");
  
  D = loadAnimation("D/framed1.png","D/framed2.png");
 
  A = loadAnimation("A/a1.png","A/a2.png")
  
  S = loadAnimation("S/s1.png","S/s2.png");
  
  W=loadAnimation("W/W1.png","W/W2.png")
  
  WE = loadImage("WE/we1.png");
 
  AE = loadImage("ae/ae1.png");

 DE = loadImage("de/de1.png");

}

function setup() {

  createCanvas(400, 400);

  tutorial = createSprite(200, 200, 400, 400);
  tutorial.addImage("cross_buns", tutorialMap);
  tutorial.scale=2.9;

  player = createSprite(200, 200, 50, 50);
  player.addImage("hot_dogs", playerImage);
   player.addAnimation("pichu", A);
   player.addAnimation("pikachu", D);
   player.addAnimation("hi", S);
   player.addAnimation("pika", W);
   player.addImage("salamance", WE);
   player.addImage("raichu", AE);
   player.addImage("live", DE);
}

function draw() {

  background("black");
  drawSprites();


  if(keyDown("A")) {
    player.x = player.x-25
    player.changeAnimation("pichu", A);
  }

  if(keyDown("D")) {
    player.x = player.x+25
    player.changeAnimation("pikachu", D);
  }

  if(keyDown("S")) {
    player.y = player.y+25
    player.changeAnimation("hi", S);
  }

  if(keyDown("W")) {
    player.y = player.y-25
    player.changeAnimation("pika", W);
  }

  if(keyWentUp("W")) {
    player.changeImage("salamance", WE);
  }

  
  if(keyWentUp("A")) {
    player.changeImage("raichu", AE);
  }

  
  
  if(keyWentUp("S")) {
    player.changeImage("hot_dogs", playerImage);
  }



  if(keyWentUp("D")) {
    player.changeImage("live", DE);
  }

  
  textSize(25);
  fill("red");

  if(gameState === "tutorialState") {
    text("Hi! Press Enter to keep reading.", 25, 300);
    textState = 2;
  } 

}