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
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(650, 650);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{   background(10,120,90);
    stroke(0);
    fill(0);
    
    //call createboarder function
    createBorders(20);

    // exit message
    textSize(20);
    text("EXIT", width-400,height-25)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy 1
    fill(800,0,0);
    square(shapeX, shapeY, 10);

     //speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // potential enemy 2
    fill(200,300,90);
    square(shapeX+70, shapeY+5, 15);

    //speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);



    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // shape out of bounds
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

    // exit
    if(characterX > 300 && characterX < 360 && characterY > 610)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

     // character out of bounds
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

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
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
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
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