var xPos = 202;
var yPos = 300;
var speed = 15;
noStroke();
rectMode(CORNERS);

var drawHilt = function(){
    fill(189,189,189);
    rect(200,300,214,378);
    fill(255,0,0);
    ellipse(214,325,6,15);
};

var drawBeam = function(){
    fill(186,255,204);
    rect(xPos,yPos,210,320);
    yPos -= speed;
    if (yPos < 50){
        yPos=50;
    }
};

background(255,255,255);
var draw = function() {
if (mouseIsPressed){
    drawBeam();
}
else {
    yPos = 300;
}
drawHilt();
};
