var righteyeX = 314;
var righteyeY = 250;
var righteyeDirection = 2;

var lefteyeX = 114;
var lefteyeY = 250;
var lefteyeDirection = 2;

var mouthX = 300;
var mouthY = 420;
var mouthDirection = 1;

var hatX = 150;
var hatY = 20;
var hatDirection = 1;

var hatlineX = 300;
var hatlineY = 420;
var hatlineX = 100;
var hatlineY = 120;
var hatlineDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;

//CANVAS
function setup()
{
    createCanvas(500, 600);
    righteyeDirection = floor(random() * 10) + 1;
    lefteyeDirection = floor(random() * 10) + 1;
}

function draw()
{
    background(120,50,70);

    //head
    fill(10,90,90);
    circle(250,300,450);

    //left eye
    fill(900);
    circle(150,250,80);
    //right eye
    circle(350,250,80);

    //right pupil
    fill(0);
    square(righteyeX,righteyeY,20);
    righteyeX+=righteyeDirection;
    if(righteyeX >= 354 || righteyeX <= 314)
    {
        righteyeDirection *= -1;
    }

    //left pupil
    fill(0);
    square(lefteyeX,lefteyeY,20);
    lefteyeX+=lefteyeDirection;
    if(lefteyeX >= 165 || lefteyeX <= 114)
    {
        lefteyeDirection *= -1;
    }
  

    //left eye shine
    fill(90,90,0)
    point(160,260)
    //left eye shine
    point(360,260)
    

    //nose
    fill(40,0,90);
    triangle (240,300,250,350,300,300);

    //mouth
    fill(0);
    ellipse(mouthX,mouthY,90,60);
    mouthY+=mouthDirection;
    if(mouthY >= 450 || mouthY <= 420)
    {
        mouthDirection *= -1;
    }

    //hat
    fill(0,80,20);
    rect(hatX,hatY,300,100);
    hatX+=hatDirection;
    hatY+=hatDirection;
    if(hatX >= 165 && hatY >= 165 || hatX <=114 && hatY <= 114)
    {
        hatDirection *= -1;
    }
    
    stroke(900);
    line(hatlineX,hatlineY,450,120);
    hatlineY+=hatlineDirection;
    if(hatlineY >= 165 || hatlineY <= 114)
    {
        hatlineDirection *= -1;
    }

    //name text
    fill(600);
    textSize(20);
    text ("dylan kidd", 380,580);

    //title text
    fill(600);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = -10;
    }
    text ("Self Portrait",20,580);
    
}