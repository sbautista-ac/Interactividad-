let bg_color = '#0000';
const PALETTE = ['#ef0505', '#33FF57', '#3357FF'];
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
   // bg_color = random(PALETTE);
    bg_color = PALETTE[0];
x= random(width);
y= random(height);

}
function draw() {
    background(bg_color);

    fill(PALETTE[1]);
    stroke(PALETTE[2]);
    x+= 1;
    if(x > width){
        x = -RECT_SIZE;
        
    }

    //(x, y, width, height)
    rect(x, y, 100, 100);

    //(x1, y1, x2, y2, x3, y3)
    ellipse(x, y, 300, 100, 100);

    //(x1, y1, x2, y2, x3, y3)
    triangle(x, y, x+50, y+100, x-50, y+100);
}

function mousePressed() {
    bg_color = random(PALETTE);
 
}