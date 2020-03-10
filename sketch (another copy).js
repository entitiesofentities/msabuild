let f = 100;
let v = 68
let canvas;
let arenoFont;
let img;
let bg;
let walkman;
let mousePos = 600;
let gutterSize;
let gap1 = 800;
let gap2 = 1800;

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
  arenoFont = loadFont('fonts/Areno-Regular.ttf')
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  centerCanvas();
  background(255, 0, 200);
  imageMode(CENTER);
  gutterSize = ((windowWidth - 1024)/2.5);
}

function draw() {
fill (0);
rect(0,0,width,height);
//background(bg);
fill(255);
textSize(f);
textFont(arenoFont);
//image(bg, width/2, height/2);

//gutters
fill(0);
rect(0, 0, gutterSize, height);
rect(width - gutterSize, 0, width, height);
fill(255);

crosswalkHorizontal()
walkSign();
fill(255);
//text(mouseY, 50, 100);

if (mouseY < 599) {

//crosswalkBG();

fill(255);
textSize(150);
text("MSA", gap1 - mouseY, 420);
text("STREETS", gap2 - mouseY, 420);
fill(255);

//crosswalkFG();

//translate(gutterSize + 400, map(mouseY, 0, 1000, 800, -250));
translate((gap2 - gap1)/2 + (gap1 + 130) - mouseY, 350);
rotate(map(mouseY, 0, 1000, 10, 0));
image(img, 0, 0, img.width/map(mouseY, 0, 600, 4, 2), img.height/map(mouseY, 0, 600, 4, 2));
}

if (mouseY > 599 && millis() > 2000) {
//crosswalkBG();
//crosswalkFG();


textSize(150);
fill('aqua');
text("MSA", gap1 - mouseY, 420);
fill('red');
text("STREETS", gap2 - mouseY, 420);
fill(255);

translate(width - gutterSize - mouseY - 300, 325);
rotate(0);
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

function crosswalkHorizontal(){

  for (i = -1000; i < gap2; i += 100) {
    fill(255);
    xPos = 20 + i - mouseY;
    if (i < gap1 || i > (gap1 + 200)) {
    rect(20 + i - mouseY, 250, 40, 200);
  }
  }

  for (i = (gap2 + 500); i < 5000; i += 100) {
    fill(255);
    xPos = 20 + i - mouseY;
    rect(20 + i - mouseY, 250, 40, 200);
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
  textSize(50);
  if (millis() < 2000) {
  rect(gutterSize + 250, height/2 - 150, 150, 150);
  fill('orange');
  text ("WAIT", gutterSize + 260, height/2 - 80);
  fill('black');
  text ("WALK", gutterSize + 260, height/2 - 20);
  fill(50);
  rect(gutterSize + 305, height/2, 25, height);
}

if (millis() > 2000) {
  rect(gutterSize + 250, height/2 - 150, 150, 150);
  fill('black');
  text ("WAIT", gutterSize + 260, height/2 - 80);
  fill('green');
  text ("WALK", gutterSize + 260, height/2 - 20);
  fill(50);
  rect(gutterSize + 305, height/2, 25, height);
}

}
