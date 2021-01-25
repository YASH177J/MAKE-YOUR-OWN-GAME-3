
var titleScreen,bg1;
var brotherIMG1,brotherIMG2;
var enemysGroup;
var enemy1,enemy2,enemy3,enemy4;
var title,Start,startButton
var bgIMG2,bg2;
var Brother;
var image,image2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var music1,music2,music3,music4,musci5;
var level1,level2,level3,level4;
var bro12gun,broGun;
function preload() {
 
  bg1=loadImage("BG IMAGE1 (2).png")
  startButton=loadImage("startButton.jpg")
  bg2=loadImage("BG IMAGE mountains.jpg")
  brotherIMG1=loadImage("big bro.png")
  brotherIMG2=loadImage("small bro.png")
  music1=loadSound("music1.mp3")
  enemy1=loadImage("Guard1.jpg")
  enemy2=loadImage("Guard2.jpg")
  enemy3=loadImage("Guard3.jpg")
  enemy4=loadImage("Guard4.jpg")
  broGun=loadImage("hero's gun.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2+30,displayHeight/2-130)
    bg.addImage(bg1)
    bg.scale=0.3/1.12
    //bg.addAnimation("image2",bg2)
    
    enemysGroup = new Group();

    Start=createSprite(displayWidth/2,displayHeight/2+50)
    Start.addImage(startButton)
    Start.scale=0.8
    Start.visible = true;

    
}

function draw(){
  
  bg1.velocityX = -5;
  if (bg1.x < 450){
    bg1.x =displayWidth/2;
    }
 //console.log(bg1.x)

   if(mousePressedOver(Start)){
     
    
   
    bg.visible=false
   
    
    Start.visible=false

    bg1=createSprite(displayWidth-1200,displayHeight/2)
    bg1.addImage(bg2)
    bg1.scale=0.8
    
    bro=createSprite(displayWidth/6+80,displayHeight/1-180)
    bro.addImage(brotherIMG1)
    bro.scale=0.8

    bro12gun=createSprite(displayWidth/6+80,displayHeight/1-210)
    bro12gun.addImage(broGun)
    bro12gun.scale=0.4

    bro1=createSprite(displayWidth/6+170,displayHeight/1-150)
    bro1.addImage(brotherIMG2)
    bro1.scale=0.6
   
    bro12gun=createSprite(displayWidth/6+170,displayHeight/1-130)
    bro12gun.addImage(broGun)
    bro12gun.scale=0.4
     
    }
    if(frameCount % 150 === 0) {
    var enemy = createSprite(1200,500);
      enemy.velocityX = -4;
      
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy.addImage(enemy1);
                break;
        case 2: enemy.addImage(enemy2);
                break;
        case 3: enemy.addImage(enemy3);
                break;
        case 4: enemy.addImage(enemy4);
                break;
        default: break;
      }
       enemy.scale = 0.5;
       enemysGroup.add(enemy)
    }
   drawSprites();

}


  

 

