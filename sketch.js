let f = 100;
let v = 68
let canvas;
let arenoFont;
let img;
let bg;
let walkman;
let mousePos = 600;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, 90);

}

function setup() {
  canvas = createCanvas(windowWidth,500);
  img = loadImage('assets/manhole.png');
  walkman = loadImage('assets/walkman.png');
  bg = loadImage('assets/bg-img.jpg');
  arenoFont = loadFont('fonts/Lato-Light.ttf')
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  centerCanvas();
  background(255, 0, 200);
  imageMode(CENTER);
}

function draw() {
fill (0);
rect(0,0,width,height);
//background(bg);
fill(255);
textSize(f);
textFont(arenoFont);
//image(bg, width/2, height/2);

var gutterSize = ((windowWidth - 1024)/2) - 50;
var canvasSize = 1024;
var gutterSizeAdjusted = gutterSize + 30;

//gutters
fill(0);
rect(0, 0, gutterSizeAdjusted, height);
rect(width - gutterSizeAdjusted, 0, width, height);
fill(255);

crosswalkVertical()
walkSign();
fill(255);
//text(mouseY, 50, 100);

if (mouseY < 599 && millis() > 2000) {

//crosswalkBG();

fill(255);
text("STREETS", map(mouseY, 0, 1000, -500, 1000), height/2 + 150);
fill(255);

//crosswalkFG();

translate(400, map(mouseY, 0, 1000, 800, -250));
rotate(map(mouseY, 0, 1000, 0, 10));
image(img, 0, 0, img.width/2, img.height/2);
}

if (mouseY > 599 && millis() > 2000) {
//crosswalkBG();
//crosswalkFG();

fill(255);
text("STREETS", map(mousePos, 0, 1000, -500, 1000), height/2 + 150);

translate(400, map(mousePos, 0, 1000, 800, -250));
rotate(map(mousePos, 0, 1000, 0, 10));
image(img, 0, 0, img.width/2, img.height/2);
}


}

function crosswalkFG(){
  for (i = 0; i < width; i += 300) {
    rect(20 + i, 20, 50, height - 20);
  }
}

function crosswalkBG(){
  for (i = 150; i < width; i += 300) {
    rect(20 + i, 20, 50, height - 20);
  }
}

function crosswalkVertical(){

if (mouseY < 600) {
  for (i = -1000; i < 5000; i += 80) {
    rect(width/2 + 250, 20 + i - mouseY, 150, 40);
  }
}

if (mouseY > 600) {
  for (i = -1000; i < 5000; i += 80) {
    rect(width/2 + 250, 20 + i - (millis()/10), 150, 40);
  }
}

}

function walkSign(){
  fill(100);

  if (millis() < 2000) {
  rect(250, height/2 - 150, 300, 300);
  fill('orange');
  text ("WAIT", 260, height/2 - 50);
  fill('black');
  text ("WALK", 260, height/2 + 100);
}

if (millis() > 2000) {
  rect(250, height/2 - 150 - mouseY, 300, 300);
  fill('black');
  text ("WAIT", 260, height/2 - 50 - mouseY);
  fill('green');
  text ("WALK", 260, height/2 + 100 - mouseY);
}

}
