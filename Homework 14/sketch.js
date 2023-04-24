// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds =[];
var shapeYSpeeds =[];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(650, 650);
    // get a random speed when the it first starts
    for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200,350);
}

function draw()
{   
    //call background funtion
    createBackground();
    
    //boarder
    createBorders(20);

    //call exit funciton
    createExit();

    // character;
    drawCharacter();
    characterMovement();
    characterBoundaries();

    // enemy
    createEnemy ();
    enemyMovement ();

    //draws shape
    clickShape ();

    //call youwin function
    createYouWin();
}

function createBackground(){
background(10,120,90);
stroke(0);
fill(0);
} 

function createExit(){
    // exit message
    textSize(20);
    text("EXIT", width-400,height-25);
}

function createEnemy()

    // potential enemy 1
    fill(800,0,0);
    //shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs [i], shapeYs [i], diameters[i]);
        shapeXSpeeds [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
    // shape out of bounds
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
    }
}

function createYouWin(){
    if(characterX > 300 && characterX < 360 && characterY > 630)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function shapeBoundaries(){
    if(shapeX > width)
    {
        shapeX = 0;
    } else if (shapeX < 0) {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    } else if(shapeY < 0) {
        shapeY = height;
    }
}

function characterBoundaries(){
  if(characterX > width)
  {
      characterX = 0;
  } else if (characterX < 0) {
     characterX = width;
  }
  if(characterY > height)
  {
     characterY = 0;
  } else if(characterY < 0) {
     characterY = height;
  }    
}

function clickShape(){
    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 55);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(s)){
        characterY += 10;   
    } else if(keyIsDown(w)) {
        characterY -= 10;   
    }
    if(keyIsDown(a)){
        characterX -= 10;   
        console.log("movement: " + characterX);
    } else if(keyIsDown(d)) {
        characterX += 10;   
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border left
    rect(0, height-thickness,width-350, thickness);
    // bottom border right
    rect(360, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}