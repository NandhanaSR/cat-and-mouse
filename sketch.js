var bgImg;
var catImg1, mouseImg1;
var catImg2, mouseImg2;
var catImg3, mouseImg3;
var tom, jerry;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(880, 620, 100, 100);
    tom.addAnimation("resting", catImg1);
    tom.scale = 0.15;

    jerry = createSprite(180, 620, 80, 80);
    jerry.addAnimation("resting", mouseImg1);
    jerry.scale = 0.15;


}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("happy", catImg3);
        tom.changeAnimation("happy");
        tom.velocityX = 0;

        jerry.addAnimation("happy", mouseImg3);
        jerry.changeAnimation("happy");
    }

    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")){
        jerry.addAnimation("teasing", mouseImg2);
        jerry.changeAnimation("teasing");

        tom.addAnimation("teasing", catImg2);
        tom.changeAnimation("teasing");
        tom.scale = 0.25;
        tom.velocityX = - 3;
    }


}
