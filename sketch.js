var Naruto;
var NarutoIMG;
var Sasuke;
var SasukeIMG;
var scene;
var backgroundIMG;
var rock;
var rockIMG;

function preload() {
  NarutoIMG = loadAnimation("images/Naruto/Naruto_P1.png","images/Naruto/Naruto_P2.png","images/Naruto/Naruto_P3.png","images/Naruto/Naruto_P4.png","images/Naruto/Naruto_P5.png",);
  SasukeIMG = loadAnimation("images/Sasuke/Sasuke_P1.png","images/Sasuke/Sasuke_P2.png","images/Sasuke/Sasuke_P1.png","images/Sasuke/Sasuke_P2.png",);
  backgroundIMG = loadImage("images/Naruto_Background.png");
  rockIMG = loadImage("images/rock.png");
}

function setup() {
  createCanvas(1200,600);
  ground = createSprite(300, height/2, width, height);
  ground.addImage(backgroundIMG)
  ground.scale = 2.4;
  ground.velocityX = 3

  Naruto = createSprite(400,430,20,20)
  Naruto.addAnimation("Naruto", NarutoIMG);
  Naruto.scale = 0.6;

  Sasuke = createSprite(1050,425,20,20)
  Sasuke.addAnimation("Sasuke", SasukeIMG);
  Sasuke.scale = 0.65;
}

function draw() {
  background(0,0,0);

  spawnRocks();
  
  if(ground.x > width){
    ground.x = ground.width/2;
  }
  drawSprites();
}

function spawnRocks() {
  if (frameCount % Math.round(random(150,200)) === 0){
    rock = createSprite(0,460,20,20);
    rock.addImage(rockIMG)
    rock.velocityX = 3;
    rock.scale = 0.5;
    rock.depth = Naruto.depth;
    Naruto.depth++;
    Sasuke.depth++;
    console.log(frameCount)
  }
}