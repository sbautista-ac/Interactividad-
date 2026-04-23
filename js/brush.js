let color = 'red';
let stroke_weight = 10;
let coordinates = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#000000');
    stroke(color);
    strokeWeight(stroke_weight);
    noFill();
    beginShape();
    for(let i = 0; i < coordinates.length; i++){
        vertex(coordinates[i].x, coordinates[i].y);
    }
    endShape();

}
function mousePressed() {   
coordinates.push({x: mouseX, y: mouseY});
}
function mouseDragged() {
    coordinates.push({x: mouseX, y: mouseY});
}