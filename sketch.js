var x = 350;
var y = 200;
var sizes = [160, 130, 100, 70, 40];

function setup(){
    createCanvas(600, 400);
    background(0);
}

function draw(){
    if(mouseIsPressed){
        paint(mouseX, mouseY);
    }
    rowOfSquares();
    rowOfCircles();
}

function paint(x, y){
 noStroke();
 fill(255, 0, 0);
 ellipse(x, y, 100, 100);
}

function rowOfSquares(){
    for(var xRect = 40; xRect < 250; xRect+=50){
        //rect(50,50);
        rect(xRect, 300, 50, 50);
    }
}

function rowOfCircles(){
    for(var i = 0; i < 5; i++){
         ellipse((i+1)*100,200,sizes[i], sizes[i]);
    }
       
}