var eyeX = 560;
var eyeY = 90;
var eyeDirection = 2;

var mouthX = 300;
var mouthY = 420;
var mouthDirection = 1;

var wingX = 250;
var wingY = 250;
var wingDirection = 1;

var mouthlineX = 300;
var mouthlineY = 420;
var mouthlineX = 590;
var mouthlineY = 120;
var mouthlineDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;

//CANVAS
function setup()
{
    createCanvas(800, 600);
}

function draw()
{
    background(70000,200,3899,40);

    //body
    fill(250,130,50);
    circle(350,300,450);

    //head
    fill(250,130,50);
    circle(550,100,150);

    //eye
    fill(900);
    circle(560,90,40);

    //eye pupil
    fill(0);
    square(eyeX,eyeY,5);
    eyeX+=eyeDirection;
    if(eyeX >= 570 || eyeX <= 540)
    {
        eyeDirection *= -1;
    }

    //beak
    fill(70,60,200);
    triangle (590,150,590,120,630,130);

    //mouthline
    stroke(900);
    line(mouthlineX,mouthlineY,630,130);
    mouthlineY+=mouthlineDirection;
    if(mouthlineY >= 150 || mouthlineY <= 120)
    {
        mouthlineDirection *= -1;
    }

    //wing
    fill(700,600,200);
    rect(wingX,wingY,200,75);
    wingX+=wingDirection;
    wingY+=wingDirection;
    if(wingX >= 280 && wingY >= 265 || wingX <=220 && wingY <= 220)
    {
        wingDirection *= -1;
    }

    //legs
    fill(80,100,200)
    rect(300,500,20,80)
    rect(400,500,20,80)
    rect(400,560,40,20)
    rect(300,560,40,20)

    //name text
    fill(600);
    textSize(20);
    text ("dylan kidd", 680,580);
    //title text
    fill(600);
    textSize(30);
    text ("CHICKEN CARL",20,580);
     
 }
