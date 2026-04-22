let x  = 0, y = 0;
let stroke_color = '#0000'
let stroke_weight = 1;
let fill_color ='2F8F3F';
let size = 42;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
}
function draw(){
    background(5,30, 70);
    updateColor();
    stroke(stroke_color);
    strokeWeight(stroke_weight);
    fill(fill_color);
    ellipse(mouseX, mouseY, size,size);
}

function updateColor(){
    fill_color = map(mouseX,0,width, 0, 255,0);
    stroke_color = map(mouseX,0,width,0,255);
    stroke_Weight = map (mouseY,0, innerHeight,1,10)
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(0);
}