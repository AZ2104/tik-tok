var hr, min, sec;
var hrAngle, minAngle, secAngle; 

function setup(){
    createCanvas(600,600); 
 
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    translate(200,200);
    rotate(-90);

    hr = hour();
    min = minute();
    sec = second();


    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360)
    hrAngle = map(hr%12,0,12,0,360)

  
    push();
    rotate(secAngle);
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
    pop();

    push();
    rotate(minAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    push();
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    noFill();
    stroke("blue");
    strokeWeight(5);
    arc(0,0,250,250,0,hrAngle);

    noFill();
    stroke("green");
    strokeWeight(5);
    arc(0,0,300,300,0,minAngle);

    noFill();
    stroke("red");
    strokeWeight(5);
    arc(0,0,350,350,0,secAngle);

    stroke("yellow");
    point(0,0);
}
